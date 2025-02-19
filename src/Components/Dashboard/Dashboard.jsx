import "../../App.css";
import "./Dashboard.css";

import Sidebar from "./SideBarSection/sidebar";
import Body from "./BodySection/Body";
// import 
const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar/>
      <Body/>
    </div>
  );
};

export default Dashboard;
