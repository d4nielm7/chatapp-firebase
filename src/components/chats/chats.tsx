import { useEffect, useRef, useState } from "react";
import "./chats.css";
import EmojiPicker from "emoji-picker-react";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore"; // Correct import

interface ChatData {
  messages: { text: string; sender: string; timestamp: string }[];
}

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState<ChatData | undefined>(undefined);
  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore(); // Correct usage

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  useEffect(() => {
    if (!chatId) {
      console.error("chatId is null or undefined");
      return;
    }
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data() as ChatData);
    });
    return () => {
      unSub();
    };
  }, [chatId]);

  console.log(chat);

  const handleEmoji = (e: { emoji: string }) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = async () => {
    if (text === "") return;

    try {
      if (!chatId) {
        console.error("chatId is null or undefined");
        return;
      }
      if (!currentUser || !currentUser.id) {
        console.error("currentUser or currentUser.id is null or undefined");
        return;
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });

      if (!user || !user.id) {
        console.error("user or user.id is null or undefined");
        return;
      }
      const userIds = [currentUser.id, user.id];

      userIds.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapShot = await getDoc(userChatsRef);
        if (userChatsSnapShot.exists()) {
          const userChatsData = userChatsSnapShot.data();

          const chatIndex = userChatsData.chats.findIndex((c: { chatId: string }) => c.chatId === chatId);

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();
          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
          </div>
        </div>
        <div className="icons">
          <img src="./more.png" alt="" />
          <img src="./theme.png" alt="" />
          <img src="./img.png" alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "own" ? "own" : ""}`}>
            <img src="./avatar.png" />
            <div className="texts">
              <p>{msg.text}</p>
              <span>{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./favicon.png" alt="" />
          <img src="./theme.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./edit.png" onClick={() => setOpen((prev) => !prev)}></img>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chats;
