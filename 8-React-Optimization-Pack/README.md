# Advanced React Techniques

## Project Overview
This project showcases advanced React techniques including lazy loading, Suspense, custom hooks, and enhanced routing. These additions aim to improve application performance, maintainability, and user experience.

## New Features and Learnings
### 1. Lazy Loading with Suspense
- **Lazy Loading**: The `ExpressMart` component is loaded asynchronously using React's `lazy()` to reduce initial load time.
- **Suspense**: A fallback UI is displayed while the component is being loaded.

### 2. Custom Hooks
- **useOnline**: A custom hook that monitors the user's online/offline status.
- **useRestaurantMenu**: A custom hook to fetch restaurant menu details based on the restaurant ID.

### 3. Enhanced Routing
- **Nested Routing**: Implemented complex routing structures using `createBrowserRouter` and `RouterProvider`.
- **Error Handling**: Added error handling for routes using `Error` component.

### Project Structure
- **components/**: Contains all the React components used in the project.
- **utils/**: Houses custom hooks and utility functions.
- **App.js**: The entry point for the application where routing is configured.

## Learning Objectives
- Understand and implement lazy loading with `React.lazy()`.
- Utilize `Suspense` to handle asynchronous component loading.
- Develop custom hooks for reusable logic in React.
- Manage complex routing structures and nested routes in React.

## How to Run the Project
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

## Future Enhancements
- Implement server-side rendering for improved performance.
- Introduce state management with Redux or Context API.
