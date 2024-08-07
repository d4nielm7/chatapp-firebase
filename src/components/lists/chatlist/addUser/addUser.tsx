import "./addUser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button type="button">Search</button> 
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="User Avatar" />
          <span>Jane Doe</span>
        </div>
        <button type="button">Add User</button> 
      </div>
    </div>
  );
};

export default AddUser; 
