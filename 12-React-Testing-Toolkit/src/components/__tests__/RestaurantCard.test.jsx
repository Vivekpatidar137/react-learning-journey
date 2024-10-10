import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard component", () => {
  render(<RestaurantCard {...MOCK_DATA.info} />);
  const name = screen.getByText("Ratlami Teekha");
  expect(name).toBeInTheDocument();
});
