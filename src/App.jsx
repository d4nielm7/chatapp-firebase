import { useEffect } from "react";
import Chats from "./components/chats/chats";
import Detail from "./components/detail/detail";
import Lists from "./components/lists/lists";
import Login from "./components/login/login"; 
import Notification from "./components/notification/notification"; 
import {auth} from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";


const App = () => {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore() 


  useEffect(() =>{
    const unSub = onAuthStateChanged(auth,(user) => {
        fetchUserInfo(user?.uid);
    });

    return () =>{
      unSub();
    }
  },[fetchUserInfo]);


  if(isLoading)return <div className="loading">Loading...</div>
  return (
    <div className='container'>
      {
        currentUser ? (
          <>
            <Lists />
            <Chats />
            <Detail />
          </>
        ) : (
          <Login />
        )
      }
      <Notification/>
    </div>
  );
}

export default App;