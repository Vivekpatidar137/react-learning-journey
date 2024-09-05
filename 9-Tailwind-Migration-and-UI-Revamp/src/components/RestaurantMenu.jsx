import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import { ShimmerMenu } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const {
    restaurantMenu,
    menuItems,
    isLoading,
  } = useRestaurantMenu(id);

  if (isLoading) {
    return <ShimmerMenu />; // Show shimmer effect while loading
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="restaurant-details mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{restaurantMenu.name}</h1>
        <img
          src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId}
          alt="Restaurant"
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h4 className="text-lg text-gray-600 mb-2">{restaurantMenu?.costForTwoMessage}</h4>
        <h4 className="text-lg text-gray-600 mb-2">{restaurantMenu?.cuisines?.join(", ")}</h4>
        <h4 className="text-lg text-gray-600 mb-2">{restaurantMenu?.avgRating} Stars</h4>
        <h4 className="text-lg text-gray-600 mb-2">{restaurantMenu?.areaName}</h4>
        <h4 className="text-lg text-gray-600 mb-4">{restaurantMenu?.city}</h4>
      </div>

      <div className="menu-items-carousel">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recommended:</h2>
        <div className="carousel flex gap-4 overflow-x-auto">
          {menuItems?.length > 0 ? (
            menuItems.map((item) => {
              const itemInfo = item?.card?.info;
              return (
                <div className="carousel-item flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg shadow-md" key={itemInfo?.id}>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{itemInfo?.name}</h3>
                  <img
                    src={IMG_CDN_URL + itemInfo?.imageId}
                    alt={itemInfo?.name}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-lg text-gray-600 mb-1">{itemInfo?.category}</h4>
                  <p className="text-gray-800 font-semibold">₹ {itemInfo?.price / 100}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">Menu not available for this restaurant.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
