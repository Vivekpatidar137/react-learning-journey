
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
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-pulse">
        {/* Restaurant Details Shimmer */}
        <div className="mb-6">
          <div className="w-48 h-8 bg-gray-300 mb-4 rounded-md"></div>
          <div className="w-full h-64 bg-gray-200 rounded-md mb-4"></div>
          <div className="w-32 h-6 bg-gray-300 mb-2 rounded-md"></div>
          <div className="w-48 h-6 bg-gray-300 mb-2 rounded-md"></div>
          <div className="w-24 h-6 bg-gray-300 mb-2 rounded-md"></div>
          <div className="w-36 h-6 bg-gray-300 mb-4 rounded-md"></div>
        </div>
  
        {/* Accordion Menu Shimmer */}
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-5 bg-gray-200 rounded-lg shadow-md">
              {/* Accordion Header Shimmer */}
              <div className="flex justify-between items-center mb-2">
                <div className="w-48 h-6 bg-gray-300 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* Accordion Items Shimmer */}
              <div className="space-y-4">
                {[...Array(2)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start p-4 bg-gray-100 rounded-lg shadow"
                  >
                    {/* Item Info Shimmer */}
                    <div className="flex-1 space-y-2 mr-6">
                      <div className="w-48 h-6 bg-gray-300 rounded-md"></div>
                      <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
                      <div className="w-32 h-6 bg-gray-300 rounded-md"></div>
                      <div className="w-full h-12 bg-gray-200 rounded-md"></div>
                    </div>
  
                    {/* Item Image Shimmer */}
                    <div className="relative w-24 h-24 bg-gray-300 rounded-lg">
                      <div className="absolute top-2 right-2 w-12 h-6 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  

  
  


