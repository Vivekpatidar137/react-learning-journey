import './ShimmerStyle.css'

const Shimmer = () => {
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

export default Shimmer;
