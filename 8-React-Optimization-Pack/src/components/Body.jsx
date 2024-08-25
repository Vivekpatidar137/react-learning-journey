import RestaurantCard from "./RestaurantCard";
import { ShimmerRestaurantCard } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurants";
const Body = () => {
  const {
    originalRestaurants,
    restaurants,
    searchText,
    setRestaurants,
    setSearchText,
  } = useRestaurant();
  
  const offline = useOnline();

  if (!offline) {
    return <h1>🔴 Please check your internet connection</h1>;
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
