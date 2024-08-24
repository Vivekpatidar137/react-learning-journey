import './ShimmerStyle.css'

export const ShimmerRestaurantCard = () => {
    const arrays = Array.from({ length: 12 }).map((_, index) => {
        return (
            <div key={index} className="shimmer-wrapper">
                <div className="shimmer"></div>
                <div className="shimmer-title"></div>
                <div className="shimmer-subtitle"></div>
                <div className="shimmer-subtitle"></div>
            </div>
        );
    });
    return (
        <div className="restaurant-list">
            {arrays}
        </div>
    );
};


 export const ShimmerMenu = () => {
    return (
      <div className="menu-shimmer-container">
        <div className="menu-shimmer-wrapper menu-shimmer"></div>
        <div className="menu-shimmer-wrapper menu-shimmer"></div>
      </div>
    );
  };
  

  
  


