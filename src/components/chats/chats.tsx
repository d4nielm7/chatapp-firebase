import { useEffect, useRef, useState } from "react";
import "./chats.css"
import EmojiPicker from  "emoji-picker-react";
const Chats = () => {
const [open,setOpen] = useState(false);
const [text, setText] = useState("");
const endRef = useRef<HTMLDivElement>(null) // Specify the type

useEffect(() => {
  endRef.current?.scrollIntoView({ behavior: "smooth" });
}, []);


const handleEmoji = (e: { emoji: string }) => {
  setText((prev) => prev + e.emoji);
  setOpen(false);
};

    return (
      <div className='chat'>
        <div className='top'>
          <div className='user'>
            <img src="./avatar.png" alt="" />
            <div className='texts'>
              <span>Jane Doe</span>
              <p>Loren ipsum BABI MONYET</p> 
            </div>
          </div>
          <div className='icons'>
            <img src="./more.png" alt=""/>
            <img src="./theme.png" alt=""/>
            <img src="./img.png" alt=""/>
          </div>
        </div>
        <div className='center'>
          <div className='message own'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div className='message'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div className='message own'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div className='message own'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div className='message own'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div className='message own'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div className='message'>
            <img src="./avatar.png" />
            <div className="texts">
              <p>
                PADIMMM
              </p>
            <span>1 minute ago</span>
            </div>
          </div>
          <div ref={endRef}></div>
        </div>
        <div className='bottom'>
          <div className='icons'>
            <img src="./favicon.png" alt=""/>
            <img src="./theme.png" alt=""/>
            <img src="./info.png" alt=""/>
          </div>
            <input type="text" placeholder="Type a message..." value = {text} onChange={(e) => setText(e.target.value)}/>
            <div className="emoji">
              <img src="./edit.png" onClick={()=> setOpen(prev=>!prev)}></img>
              <div className = "picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
              </div>
            </div>
            <button className="sendButton">Send</button>
        </div>
      </div>
    )
  }
  
  export default Chats