import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";

const useRestaurantMenu = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);

    const json = await data.json();
    setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info || {});
    setMenuItems(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards || []
    );
    setIsLoading(false);
  }
  return {
    restaurantMenu,
    menuItems,
    isLoading
  };
};

export default useRestaurantMenu;
