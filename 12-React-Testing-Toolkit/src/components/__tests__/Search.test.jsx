import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../__mocks__/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the veg label image for restaurants
jest.mock("../myAssets/veg.png", () => "mocked-veg-label.png");

// Mock the CDN URL for images
jest.mock("../config", () => ({
  IMG_CDN_URL:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
}));

// Mock the global fetch API to return the mock restaurant data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should render body component and handle search functionality", async () => {
  // Render the Body component inside BrowserRouter with mocked data
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // Check if the initial number of restaurant cards displayed is correct
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  // Get the search button and input field from the DOM
  const SearchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  // Simulate typing "Larelappa Restaurant" in the search input and clicking the search button
  fireEvent.change(searchInput, { target: { value: "Larelappa Restaurant" } });
  fireEvent.click(SearchBtn);

  // Check if only one restaurant card is displayed after the search
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});
