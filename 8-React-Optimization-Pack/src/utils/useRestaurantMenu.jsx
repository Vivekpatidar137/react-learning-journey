import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);

    const json = await data.json();
    console.log(json);
    setRestaurantMenu(json.data.cards[2].card.card.info);
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
