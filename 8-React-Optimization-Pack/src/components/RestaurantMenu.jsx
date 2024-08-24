
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import { ShimmerMenu } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { id } = useParams();
  // const [isLoading, setIsLoading] = useState(true);
 
  const restaurantMenu = useRestaurantMenu(id);
  
  return !restaurantMenu ? (
    <ShimmerMenu />
  ) : (
    <div className="restaurant-menu-container">
      <div className="restaurant-details">
        <h1>{restaurantMenu.name}</h1>
        <img
          src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId}
          alt="Restaurant"
        />
        <h4>{restaurantMenu.costForTwoMessage}</h4>
        <h4>{restaurantMenu?.cuisines?.join(", ")}</h4>
        <h4>{restaurantMenu.avgRating} Stars</h4>
        <h4>{restaurantMenu.areaName}</h4>
        <h4>{restaurantMenu.city}</h4>
      </div>

      {/* <div className="menu-items-carousel">
        <h2>Top Picks:</h2>
        <div className="carousel">
          {menuItems.map((item) => {
            const itemInfo = item.dish.info;
            return (
              <div className="carousel-item" key={itemInfo.id}>
                <h3>{itemInfo.name}</h3>
                <img src={IMG_CDN_URL + itemInfo.imageId} alt={itemInfo.name} />
                <h4>{itemInfo.category}</h4>
                <p>₹ {itemInfo.price / 100}</p>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
