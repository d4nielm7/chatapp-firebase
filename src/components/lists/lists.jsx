import Chatlist from "./chatlist/chatlist"
import "./lists.css"
import Userinfo from "./userinfo/userinfo"

const Lists = () => {
    return (
      <div className='list'>
        <Userinfo/>
        <Chatlist/>
      </div>
    )
  }
  
  export default Lists