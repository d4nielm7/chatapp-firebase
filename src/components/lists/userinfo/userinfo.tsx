import "./userinfo.css"

const UserInfo = () => {
    return (
      <div className='userinfo'>
        <div className='user'>
            <img src='./avatar.png' alt="" />
            <h2>John Doe</h2>
        </div>
        <div className='icons'>
            <img src='./minus.png' alt="" />
            <img src='./theme.png' alt="" />
            <img src='./edit.png' alt="" />
        </div>
      </div>
    )
  }
  
  export default UserInfo