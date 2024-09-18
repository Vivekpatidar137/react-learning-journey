
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
      <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
        {/* Shimmer for restaurant details */}
        <div className="flex flex-col gap-4">
          <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-full h-64 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1/3 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1/5 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
  
        {/* Shimmer for menu items carousel */}
        <div>
          <div className="w-1/3 h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="flex gap-4 overflow-x-auto">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  className="flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg shadow-md animate-pulse"
                  key={index}
                >
                  <div className="w-full h-24 bg-gray-200 rounded-md mb-2"></div>
                  <div className="w-3/4 h-6 bg-gray-200 rounded mb-1"></div>
                  <div className="w-1/2 h-6 bg-gray-200 rounded"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  
  

  
  


