import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";
// Mock the IMG_CDN_URL value
jest.mock("../config", () => ({
  IMG_CDN_URL:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
}));

test("Should render RestaurantCard component", () => {
  render(<RestaurantCard {...MOCK_DATA.info} />);
  const name = screen.getByText("Ratlami Teekha");
  expect(name).toBeInTheDocument();
});

test("Should render the correct restaurant image", () => {
  render(<RestaurantCard {...MOCK_DATA.info} />);
  const image = screen.getByRole("img");

  // Compare with the mocked IMG_CDN_URL, not from MOCK_DATA
  expect(image).toHaveAttribute(
    "src",
    `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${MOCK_DATA.info.cloudinaryImageId}`
  );
});

test("Should display average rating and cost for two", () => {
  render(<RestaurantCard {...MOCK_DATA.info} />);
  const ratingCostText = screen.getByText(`${MOCK_DATA.info.avgRatingString} star • ${MOCK_DATA.info.costForTwo}`);
  expect(ratingCostText).toBeInTheDocument();
});
