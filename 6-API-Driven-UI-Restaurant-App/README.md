# API-Driven UI Restaurant App

This project is an enhanced version of the Restaurant Listing application, which is now built using ReactJS with data fetched from an external API. The application displays a list of restaurants with details such as name, rating, cuisine, and cost for two. This project demonstrates several key React concepts and advanced features:

1. **React Components**: Understanding the structure and behavior of functional components.
2. **JSX Syntax**: Using JSX to write HTML-like code within JavaScript.
3. **Props**: Passing data to components via props.
4. **JavaScript in React**: Utilizing JavaScript within React components for dynamic rendering.
5. **CSS Styling**: Applying styles to components using CSS.
6. **Keys**: Using keys to help React identify which items have changed, are added, or are removed.
7. **Config-Driven UI**: Initially using config data and now switching to real API data to drive the UI configuration.
8. **React Hooks**: Utilizing `useState` and `useEffect` hooks for state management and side effects.
9. **Asynchronous Data Fetching**: Fetching data from an API and handling asynchronous operations.
10. **Shimmer Effect**: Implementing a loading shimmer effect while data is being fetched.

## Running the Code

To run this code, follow these steps:

1. Install the necessary dependencies:
    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:1234` to see the application.

## File Structure

- `index.html`: The entry point for the application.
- `style.css`: Contains the CSS styles for the application.
- `src/main.jsx`: Main JavaScript file for the React application.
- `src/components/`: Contains React components like Header, Body, Footer, RestaurantCard, Shimmer.
- `src/config.js`: Contains configuration data like image CDN URL.
- `src/myAssets/`: Contains image assets used in the application.
- `package.json`: Lists the project dependencies and scripts.
- `.gitignore`: Specifies which files and directories to ignore in version control.
- `.babelrc`: Babel configuration file.

## Learning Objectives

- **React Components**: Learn how to create and use functional components.
- **JSX**: Understand how to use JSX for creating HTML-like structures within JavaScript.
- **Props**: Pass data to components via props for dynamic rendering.
- **JavaScript Integration**: Use JavaScript expressions within JSX for dynamic content.
- **Styling**: Apply CSS to style React components.
- **Keys**: Use keys in lists to help React manage DOM updates efficiently.
- **Config-Driven UI**: Implement a UI that is driven by real data (restaurant data), making the application dynamic and easily adjustable based on the data structure.
- **React Hooks**: Utilize `useState` and `useEffect` hooks for state management and side effects.
- **Asynchronous Data Fetching**: Fetch and manage data from an API.
- **Shimmer Effect**: Create and apply a loading shimmer effect to improve user experience.

## Author

Vivek Patidar
