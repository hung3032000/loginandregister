import "./body.css";
import Top from "../BodySection/TopSection/Top"
import Listing from "../BodySection/ListingSection/Listing";
import Activity from "../BodySection/ActivitySection/Activity";
const Body = () => {
  return (
    <div className="mainContent">
      <Top/>
      <div className="bottom flex">
          <Listing/>
          <Activity/>
      </div>
    </div>
  );
};

export default Body;
