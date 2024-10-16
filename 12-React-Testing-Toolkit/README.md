# React Testing Toolkit: Unit & Integration Tests 🧪

## 📋 Project Overview

This folder focuses on testing key components of the **SpoonSwift** app, utilizing **React Testing Library**, **Jest**, and **Redux Toolkit**. The tests ensure essential functionalities like rendering, search operations, cart management, and user interactions work smoothly across the app.

---

## 🔥 Key Test Cases & Learnings

### 1. **RestaurantCard Component** 🏷️

- **Rendering and Snapshot Testing** 📸  
  Ensured that the `RestaurantCard` component renders properly and its structure remains consistent by matching snapshots.

- **Image Rendering with Mocked CDN URL** 🖼️  
  Verified that the restaurant images load correctly by mocking the CDN URL, ensuring no external fetches disrupt the tests.

- **Display of Average Rating and Cost for Two** ⭐💰  
  Tested if the average rating and cost information is rendered as expected, providing users with clear restaurant details.

- **Cuisine Display** 🍽️  
  Ensured that the list of cuisines is displayed accurately, formatted as comma-separated values.

- **Veg Label Rendering** 🥦  
  Verified that the veg label appears only for vegetarian restaurants, using mocks for image assets to streamline testing.

### 2. **Search Functionality in Body Component** 🔍

- **Search Operation and Result Filtering**  
  Tested the search feature to ensure that the restaurant list updates correctly when users input search terms. This includes verifying that only relevant results appear after performing a search.

- **Multiple Search Handling**  
  Checked that the restaurant list updates appropriately across multiple searches, ensuring consistency in user interactions.

### 3. **Veg Label Verification** 🥗

- **Veg Label for Veg Restaurants**  
  Verified that the veg label is only rendered for vegetarian restaurants, enhancing the accuracy of the restaurant card display.

### 4. **Cart Component** 🛒

- **Cart Item Addition**  
  Tested the functionality of adding items to the cart from the `RestaurantMenu`, ensuring accurate cart state updates through Redux.

- **Cart Item Count**  
  Verified the correct display of cart item counts when items are added or removed, ensuring the cart state stays in sync with user actions.

### 5. **Redux Store Integration** 🗂️

- **Mocking Redux Store for Tests**  
  Implemented mocked initial state for the cart, ensuring the Redux store is properly integrated into the test environment. This setup enables detailed testing of cart interactions and state updates.

---

## 🧰 Key Learnings

1. **Effective Usage of Mocks**  
   Learned to mock external configurations like CDN URLs and image assets to avoid external dependencies during testing.

2. **Snapshot Testing**  
   Used snapshot testing to maintain component consistency and quickly detect unintended changes in the rendered output.

3. **Redux Store Testing**  
   Integrated Redux state management into tests, allowing for in-depth validation of cart and menu functionality.

4. **Improved Test Coverage**  
   Gained deeper insights into user interaction flows like searching and filtering, along with cart operations, by writing both unit and integration tests.

---

## ⚙️ Configuration Highlights

- **Handling Static Assets:**  
  Configured `moduleNameMapper` in `jest.config.js` to handle static assets like PNGs and ensure they don't interfere with tests.

- **Mocking Global Fetch:**  
  Implemented global fetch mocks to simulate API responses, ensuring controlled test environments.
