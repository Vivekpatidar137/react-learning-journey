import { IMG_CDN_URL } from "./config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  costForTwo,
}) => {
  return (
    <div className="w-72 border border-gray-300 rounded-lg m-4 bg-white shadow-lg transition-transform transform hover:translate-y-[-0.125rem]">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="w-full h-52 object-cover rounded-t-lg"
      />
      <h2 className="text-lg font-semibold px-4 py-2">{name}</h2>
      <h3 className="text-sm text-gray-600 px-4">
        {avgRatingString} star • {costForTwo}
      </h3>
      <h4 className="text-sm text-gray-500 px-4 pb-4">{cuisines?.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
