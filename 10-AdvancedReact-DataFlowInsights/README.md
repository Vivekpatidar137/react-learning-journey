# Advanced React: Data Flow Insights 🚀

## 📋 Project Overview

This section of the project dives into **Advanced React** concepts, focusing on enhancing data flow management using:

- Higher-Order Components (HOCs)
- Prop Drilling and Context API
- Controlled & Uncontrolled Components
- Lifting State Up

These techniques streamline data flow, improve reusability, and increase the modularity of the app, creating a better development and user experience.

---

## 🔥 New Features and Learnings

### 1. Higher-Order Components (HOCs) 🌀
- **`withVegLabel`**: Created an HOC that wraps the `RestaurantCard` component to add a "veg" label dynamically to vegetarian restaurants. This helps keep component logic clean while enhancing functionality.

### 2. Prop Drilling and Context API 🌐
- **Context API (`UserContext`)**: Simplified the handling of the `loggedInUser` state by using the Context API in the `Header` and `AppLayout`, reducing unnecessary prop drilling and centralizing state management.
- **Prop Drilling**: Managed prop drilling efficiently, especially in the `RestaurantCategories` and `RestaurantMenu` components, where category states are passed and controlled from the parent component.

### 3. Controlled Component with Accordion 🎛️

#### Accordion Implementation 🔄

The **`RestaurantCategories`** and **`CategoryItems`** components are designed to display categories and items in an accordion-style format. The state that determines whether each category is expanded is centrally managed by the **`RestaurantMenu`** component, making it a solid example of a controlled component in React.

#### Controlled Component Logic 🧠

- The **`isOpen`** state, which controls whether a category is expanded or collapsed, is maintained in the **`RestaurantMenu`** component.
- This state is passed down as a prop to the **`RestaurantCategories`** component, ensuring that **`RestaurantMenu`** controls the accordion’s open/close logic.

#### Interaction Flow 📊

- **User Interaction**: When a category is clicked, it triggers a state change in **`RestaurantMenu`**, which updates the **`isOpen`** state for the corresponding category.
- **Accordion Behavior**: The updated state is passed down to **`RestaurantCategories`**, controlling which category expands or collapses.
  
This approach centralizes the accordion state in one parent component, making the interaction predictable, modular, and easy to maintain.



### 4. Lifting State Up 📈
- **Accordion in `RestaurantCategories`**: Implemented an accordion behavior that is controlled by the parent `RestaurantMenu` component. This approach demonstrates lifting state up to manage open/close states effectively using `showIndex` to control the display of categories.

---

## 📁 Project Structure

```bash
components/          # All React components used in this project
  ├── Body.js        # Main restaurant listing with search
  ├── RestaurantCard.js # Card layout for displaying restaurant info
  ├── RestaurantMenu.js # Menu component with controlled accordion
  ├── Header.js      # Header with user context
utils/               # Custom hooks & helper functions
  ├── useRestaurant.js  # Custom hook to fetch and manage restaurant data
  ├── useOnline.js      # Hook for detecting online status


🎯 Learning Objectives
Master Higher-Order Components (HOCs) for extending component functionality.
Efficiently manage prop drilling with Context API.
Understand and apply Controlled and Uncontrolled Components.
Implement Lifting State Up for improved state management and component interactions.

🚀 Future Enhancements
Improve state management by integrating useReducer or a state management library like Redux.