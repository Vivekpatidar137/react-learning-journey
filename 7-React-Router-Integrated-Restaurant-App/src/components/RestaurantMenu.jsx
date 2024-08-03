import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3315103&lng=75.0366677&restaurantId=" +
      id
    );
    const json = await data.json();
    setRestaurantMenu(json.data.cards[2].card.card.info);
  }

  return (
    <>
      <h2>{restaurantMenu.name}</h2>
      <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} />
      <h3>{restaurantMenu.costForTwoMessage}</h3>
      <h3>{restaurantMenu?.cuisines?.join(",")}</h3>
      <h3>{restaurantMenu.avgRating} Stars</h3>
      <h3>{restaurantMenu.areaName}</h3>
      <h3>{restaurantMenu.city}</h3>+
    </>
  );
};
export default RestaurantMenu;
