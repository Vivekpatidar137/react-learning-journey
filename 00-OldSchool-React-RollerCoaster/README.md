# Class-Based Components (React-Vintage-Mode)

## Project Overview

This project demonstrates the use of class-based components in a React application. It includes multiple pages like Home, About, Contact, and Profile, with routing functionality provided by `react-router-dom`. The project is designed to help understand how class-based components work, how to manage state, and how to utilize lifecycle methods in a React application.

## Learning Objectives

- Understand the basics of class-based components in React.
- Learn how to manage component state using `this.state`.
- Implement lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Integrate routing with `react-router-dom`, including nested routes.
- Handle asynchronous operations within class-based components.

## Project Structure

- **`index.html`**: The main HTML file that includes the React application.
- **`src/main.jsx`**: The entry point for the React application.
- **`src/components/`**: This directory contains all the class-based components like `Header`, `Home`, `About`, `Contact`, and `Profile`.
- **`src/components/Header.css`**: The CSS file for styling the Header component.

## Key Features

### 1. Class-Based Components

This project uses class-based components instead of functional components. Key components include:

- **Home**: Demonstrates the use of lifecycle methods.
- **About**: Includes a child `Profile` component.
- **Contact**: A simple component displaying contact information.
- **Profile**: Manages state and performs an asynchronous operation to fetch user data from the GitHub API.

### 2. Lifecycle Methods

The project includes the following lifecycle methods:

- **`componentDidMount`**: Used in the `Profile` and `Home` components for fetching data and setting up intervals.
- **`componentDidUpdate`**: Used to demonstrate how updates to props or state trigger re-renders.
- **`componentWillUnmount`**: Used to clear intervals and perform cleanup tasks.

### 3. Routing with `react-router-dom`

The project integrates `react-router-dom` for client-side routing, featuring:

- **Nested Routes**: Demonstrated in the `About` page with a nested `Profile` route.
- **Outlet Component**: Used to render child routes within the parent layout.
- **Link Component**: Utilized for navigation between different routes.

## How to Run

1. **Clone the repository** to your local machine.
2. **Navigate to the project directory** and install dependencies:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

4. Open your browser and visit `http://localhost:1234` to view the application.

## Conclusion

This project provides a foundational understanding of class-based components in React, along with routing and state management techniques. It serves as a stepping stone for more advanced React concepts.
