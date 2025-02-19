import "./sidebar.css";
import logo from "../../../../public/img/logo.jpg";
import { IoMdSpeedometer } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="sideBar grid">

      <div className="logoDiv flex">
          <img src={logo} alt = "Image Name"></img>
          <h2>News.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          Quick menu
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
              <a className="menuLink flex" href="#">
                <IoMdSpeedometer className = "icon"/>
                <span className="smallText">
                  DashBoard
                </span>
              </a>
          </li>

          <li className="listItem">
              <a className="menuLink flex" href="#">
                <IoMdSpeedometer className = "icon"/>
                <span className="smallText">
                  DashBoard
                </span>
              </a>
          </li>

          <li className="listItem">
              <a className="menuLink flex" href="#">
                <IoMdSpeedometer className = "icon"/>
                <span className="smallText">
                  DashBoard
                </span>
              </a>
          </li>

          
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          Settings menu
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
              <a className="menuLink flex" href="#">
                <IoMdSpeedometer className = "icon"/>
                <span className="smallText">
                  DashBoard
                </span>
              </a>
          </li>

          <li className="listItem">
              <a className="menuLink flex" href="#">
                <IoMdSpeedometer className = "icon"/>
                <span className="smallText">
                  DashBoard
                </span>
              </a>
          </li>
          
          <li className="listItem">
              <a className="menuLink flex" href="#">
                <IoMdSpeedometer className = "icon"/>
                <span className="smallText">
                  DashBoard
                </span>
              </a>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
