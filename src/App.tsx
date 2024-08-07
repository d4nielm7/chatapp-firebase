import Chats from "./components/chats/chats";
import Detail from "./components/detail/detail";
import Lists from "./components/lists/lists";
import Login from "./components/login/login"; 
import Notification from "./components/notification/notification"; 
const App = () => {

  const user = false; 

  return (
    <div className='container'>
      {
        user ? (
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
