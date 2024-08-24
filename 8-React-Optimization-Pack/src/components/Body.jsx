import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { ShimmerRestaurantCard } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3315103&lng=75.0366677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalRestaurants(
      json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants
    );
  }

const offline = useOnline();

if(!offline){
  return <h1>🔴 Please check your internet connection</h1>
}

  return !originalRestaurants.length ? (
    <ShimmerRestaurantCard />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, originalRestaurants);

            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
