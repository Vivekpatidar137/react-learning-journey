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
    return <h1 className="text-center text-red-500">🔴 Please check your internet connection</h1>;
  }

  return !originalRestaurants.length ? (
    <ShimmerRestaurantCard />
  ) : (
    <>
      <div className="flex justify-center py-4">
        <input
          type="text"
          className="border p-2 rounded-l-md"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-r-md"
          onClick={() => {
            const data = filterData(searchText, originalRestaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center p-5">
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
