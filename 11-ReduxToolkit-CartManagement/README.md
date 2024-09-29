# Redux Toolkit: Cart Management 🛒

## 📋 Project Overview

This section of the project focuses on **Redux Toolkit** and **React Redux** for efficient state management, specifically for managing a shopping cart in the restaurant app.

Using Redux Toolkit simplifies the setup and reduces boilerplate code, while React Redux allows seamless integration with React components.

---

## 🔥 New Features and Learnings

### 1. Redux Toolkit Setup 🛠️
- **Store Configuration**: The store is configured using `configureStore` from Redux Toolkit, making it simple to manage cart-related state in one central place.
- **Reducers**: Created a `cartSlice` with actions for adding, removing, and clearing items from the cart.

### 2. React Redux Integration ⚛️
- **`useSelector`**: Used in components like `Header` and `Cart` to retrieve the current state of the cart from the Redux store.
- **`useDispatch`**: Used to dispatch actions like `addItems` and `clearCart` to modify the cart's state when interacting with the UI.

### 3. Cart Functionalities 🛍️
- **Dynamic Cart Display**: The `Header` component dynamically shows the number of items in the cart by accessing the Redux store through `useSelector`.
- **Clear Cart**: A button in the `Cart` component allows users to clear the cart with a single click, using the `clearCart` action from Redux Toolkit.

### 4. State Management Optimization 🔄
- **Centralized State**: By using Redux Toolkit, the cart state is centralized, which eliminates the need for prop drilling and improves the scalability of the app.
- **Modular Architecture**: Actions and reducers are handled in a modular way, making the code more maintainable and easier to extend for future features.

---
