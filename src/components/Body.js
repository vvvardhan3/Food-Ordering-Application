import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn">Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {resList.map((item) => (
            <RestaurantCard key={item.info.id} resData={item.info} />
          ))}
        </div>
      </div>
    );
  };

export default Body;