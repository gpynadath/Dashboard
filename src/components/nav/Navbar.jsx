import {
  ChatBubble,
  DarkMode,
  FullscreenExit,
  Language,
  ListOutlined,
  NotificationAdd,
  Search,
} from "@mui/icons-material";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <Language className="icon" />
          </div>
          <div className="item">
            <DarkMode className="icon" />
          </div>
          <div className="item">
            <FullscreenExit className="icon" />
          </div>
          <div className="item">
            <NotificationAdd className="icon" />
          </div>
          <div className="item">
            <ChatBubble className="icon" />
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
