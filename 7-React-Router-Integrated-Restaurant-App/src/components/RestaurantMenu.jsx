import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import { ShimmerMenu } from "./Shimmer";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3315103&lng=75.0366677&restaurantId=" +
        id
    );

    const json = await data.json();
    setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info);
    setMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel
    );
    setIsLoading(false);
  }

  if (isLoading) {
    return <ShimmerMenu />; // Show shimmer effect while loading
  }

  return  (
    <div className="restaurant-menu-container">
      <div className="restaurant-details">
        <h1>{restaurantMenu.name}</h1>
        <img
          src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId}
          alt="Restaurant"
        />
        <h4>{restaurantMenu?.costForTwoMessage}</h4>
        <h4>{restaurantMenu?.cuisines?.join(", ")}</h4>
        <h4>{restaurantMenu?.avgRating} Stars</h4>
        <h4>{restaurantMenu?.areaName}</h4>
        <h4>{restaurantMenu?.city}</h4>
      </div>

      <div className="menu-items-carousel">
        <h2>Top Picks:</h2>
        <div className="carousel">
          {menuItems.map((item) => {
            const itemInfo = item?.dish?.info;
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
      </div>
    </div>
  );
};

export default RestaurantMenu;
