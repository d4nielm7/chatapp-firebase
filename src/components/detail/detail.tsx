import "./detail.css";

const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="Toggle Chat Settings" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowDown.png" alt="Toggle Privacy & Help" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="Toggle Shared Photos" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./plainbg.jpg" alt="Shared Photo" />
                <span>Photo_2092024_png</span>
              </div>
              <img src="./camera.png" alt="Camera Icon" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./plainbg.jpg" alt="Shared Photo" />
                <span>Photo_2092024_png</span>
              </div>
              <img src="./camera.png" alt="Camera Icon" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./plainbg.png" alt="Shared Photo" />
                <span>Photo_2092024_png</span>
              </div>
              <img src="./camera.png" alt="Camera Icon" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./plainbg.png" alt="Shared Photo" />
                <span>Photo_2092024_png</span>
              </div>
              <img src="./camera.png" alt="Camera Icon" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Toggle Shared Files" />
          </div>
        </div>
        <button>Block Users</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Details;
