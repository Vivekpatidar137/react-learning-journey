# React-Router-Integrated-Restaurant-App

## Description

This project extends the API-Driven UI Restaurant App by integrating React Router for client-side routing. The app now supports navigation between various pages, including:

- Home Page
- About Page
- Contact Page
- Dynamic Restaurant Menu Page

Additionally, error handling for invalid routes has been implemented to improve user experience.

## New Learnings

**React Router Setup:**
- `createBrowserRouter`, `RouterProvider`: Configuring the routes and setting up the router provider.
- `Outlet`: Facilitates nested routing, allowing different components to render within the layout.
- `Link`: Replaces anchor tags for client-side navigation.
- `useRouteError`: Handles errors when a user navigates to a non-existent route.
- `useParams`: Accesses dynamic route parameters, such as restaurant IDs, to fetch and display specific content.

## Learning Objectives

- **Understand and implement client-side routing in a React application.**
- **Learn how to handle dynamic routes and errors using React Router.**
- **Develop a modular architecture with nested routes for better organization and navigation.**

---

Feel free to explore the project and see how client-side routing and error handling are implemented in action!
