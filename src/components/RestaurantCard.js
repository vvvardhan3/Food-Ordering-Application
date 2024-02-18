import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const cuisines = resData.cuisines.join(", ");
    return (
      <div className="res-card">
        <img className="reslogo" src= {CDN_URL +
            resData.cloudinaryImageId} alt="Restaurant Logo" />
        <h3>{resData.name}</h3>
        <h5>{cuisines}</h5> 
        <h5>{resData.avgRating} stars</h5>
        <h5>{resData.costForTwo}</h5>
      </div>
    );
  };

export default RestaurantCard;