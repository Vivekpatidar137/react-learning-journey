import './ShimmerStyle.css'

export const ShimmerRestaurantCard = () => {
    // Create an array of 12 shimmer cards
    const arrays = Array.from({ length: 12 }).map((_, index) => {
      return (
        <div
          key={index}
          className="flex flex-col p-4 m-2 bg-gray-100 rounded-lg shadow-sm animate-pulse"
        >
          <div className="w-full h-32 bg-gray-300 rounded mb-4"></div> {/* Placeholder for image */}
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div> {/* Placeholder for title */}
          <div className="w-1/2 h-4 bg-gray-300 rounded mb-1"></div> {/* Placeholder for subtitle */}
          <div className="w-1/3 h-4 bg-gray-300 rounded"></div> {/* Placeholder for additional subtitle */}
        </div>
      );
    });
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
  

  
  


