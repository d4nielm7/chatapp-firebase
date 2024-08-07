import { useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/addUser"; // Correct casing for the import

const UserInfo = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./plus.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./mic.png" : "./phone.png"}
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default UserInfo;
