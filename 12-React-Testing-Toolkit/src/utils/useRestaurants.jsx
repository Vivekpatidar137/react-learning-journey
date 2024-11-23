import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0759837&lng=72.8776559&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    setCarouselItems(json.data.cards[0].card.card);

    console.log(json.data.cards[0].card.card);

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setOriginalRestaurants(
      json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants
    );
  }

  return {
    originalRestaurants,
    restaurants,
    searchText,
    carouselItems,
    setSearchText,
    setRestaurants,
  };
};

export default useRestaurants;
