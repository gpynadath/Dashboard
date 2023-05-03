import {
  AddBox,
  Dashboard,
  DeliveryDining,
  GraphicEq,
  Healing,
  LocalActivity,
  Logout,
  Message,
  OutboxRounded,
  Person,
  Person2Outlined,
  Settings,
} from "@mui/icons-material";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Geo</span>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <Person2Outlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <AddBox className="icon" />
            <span>Products</span>
          </li>
          <li>
            <OutboxRounded className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDining className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful Links</p>
          <li>
            <GraphicEq className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Message className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Services</p>
          <li>
            <Healing className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LocalActivity className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <Person className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
