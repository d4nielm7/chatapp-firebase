
import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../../lib/firebase"; 
import { setDoc ,doc} from "firebase/firestore";
const Login = () => {
  const [avatar, setAvatar] = useState<{
    file: File | null;
    url: string;
  }>({
    file: null,
    url: "",
  });

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());
    const { username, email, password } = formDataObj as Record<string, string>;
    try {
      // Create a user with email and password using Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      await setDoc(doc(db,"users",res.user.uid),{
        username,
        email,
        id:res.user.uid,
        blocked:[],
      });

      await setDoc(doc(db,"userschats",res.user.uid),{
        chats:[],
      });

      // Optional: Show a success message
      toast.success("Account Created! You can login now");
    } catch (err: any) {
      console.error(err);
  
      // Show an error message
      toast.error(err.message);
    }
  };

    return (
      <div className='login'>
        <div className="item">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input type ="text" placeholder="Email" name="email" />
            <input type ="password" placeholder="Password" name="password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
              Upload an Image</label>
            <input type ="file" id="file" style={{display:"none"}} onChange={handleAvatar} />
            <input type ="text" placeholder="Username" name="username" />
            <input type ="text" placeholder="Email" name="email" />
            <input type ="password" placeholder="Password" name="password" />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Login