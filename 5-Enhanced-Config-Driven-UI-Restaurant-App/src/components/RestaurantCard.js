import { IMG_CDN_URL } from "./config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>
        {avgRatingString} star • {costForTwo}
      </h3>
      <h4>{cuisines?.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;