# Let's get Classy

**Question 1 = What is the `order of life cycle method calls` in `Class Based Components`?**

**Answer =**  *In React, class-based components follow a specific lifecycle with a series of methods that are called at different stages of a component's existence. Here's the order of lifecycle method calls:*

### 1. **Mounting (When a component is being created and inserted into the DOM):**

- **`constructor(props)`**: Initializes the component's state and binds methods.
- **`static getDerivedStateFromProps(props, state)`**: Updates state based on props before rendering.
- **`render()`**: Returns the JSX to render the component.
- **`componentDidMount()`**: Invoked after the component is mounted to the DOM. Ideal for making API calls, setting up subscriptions, etc.

### 2. **Updating (When props or state changes):**

- **`static getDerivedStateFromProps(props, state)`**: (Optional) Updates state based on props before rendering.
- **`shouldComponentUpdate(nextProps, nextState)`**: (Optional) Determines whether the component should re-render or not.
- **`render()`**: Re-renders the component with the updated state or props.
- **`getSnapshotBeforeUpdate(prevProps, prevState)`**: (Optional) Captures some information (e.g., scroll position) before the DOM is updated.
- **`componentDidUpdate(prevProps, prevState, snapshot)`**: Invoked after the component updates. Ideal for operations based on changes in the DOM.

### 3. **Unmounting (When a component is being removed from the DOM):**

- **`componentWillUnmount()`**: Cleanup tasks like removing event listeners, canceling network requests, etc.

### 4. **Error Handling (If an error occurs during rendering, lifecycle methods, or in constructors of child components):**

- **`static getDerivedStateFromError(error)`**: (Optional) Updates state so the next render shows a fallback UI.
- **`componentDidCatch(error, info)`**: (Optional) Logs the error and displays a fallback UI.

### Summary of the Order:

1. **Mounting**: `constructor` → `getDerivedStateFromProps` → `render` → `componentDidMount`
2. **Updating**: `getDerivedStateFromProps` → `shouldComponentUpdate` → `render` → `getSnapshotBeforeUpdate` → `componentDidUpdate`
3. **Unmounting**: `componentWillUnmount`
4. **Error Handling**: `getDerivedStateFromError` → `componentDidCatch`

This sequence helps developers understand how and when to interact with the component's lifecycle for various purposes like fetching data, optimizing performance, or cleaning up resources.

**Question 2 =**  **Why do we use `componentDidMount`?**

**Answer =**  *The `componentDidMount` lifecycle method is used in React class-based components to handle tasks that need to be executed once a component is fully mounted (inserted into the DOM). It’s one of the most commonly used lifecycle methods, and it serves several important purposes:*

### Key Reasons for Using `componentDidMount`:

1. **Performing Side Effects (e.g., Fetching Data):**
    - It's common to make API calls or fetch data from a server in `componentDidMount` because the component is now fully mounted, and the UI is ready to display the data. Once the data is fetched, you can update the state, which will trigger a re-render of the component.
    - Example:
        
        ```jsx
        javascriptCopy code
        componentDidMount() {
          fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => this.setState({ data }));
        }
        
        ```
        
2. **Setting Up Subscriptions or Event Listeners:**
    - You might need to set up subscriptions to data streams, WebSocket connections, or add event listeners (e.g., window resizing, scrolling) in this method. It ensures that these operations only happen when the component is actually present in the DOM.
    - Example:
        
        ```jsx
        javascriptCopy code
        componentDidMount() {
          window.addEventListener('resize', this.handleResize);
        }
        
        ```
        
3. **Manipulating the DOM:**
    - Since the component is now in the DOM, you can safely interact with or manipulate it using direct DOM methods or third-party libraries that require access to the DOM elements.
    - Example:
        
        ```jsx
        javascriptCopy code
        componentDidMount() {
          this.inputElement.focus();  // Focus on an input field after it mounts
        }
        
        ```
        
4. **Starting Timers or Intervals:**
    - If you need to start a timer or an interval that periodically updates the state or performs some other action, `componentDidMount` is the right place to initialize it.
    - Example:
        
        ```jsx
        javascriptCopy code
        componentDidMount() {
          this.interval = setInterval(() => this.tick(), 1000);
        }
        
        ```
        

### Summary:

`componentDidMount` is used to handle any side effects, data fetching, subscriptions, DOM interactions, or other tasks that need to happen after the component is fully rendered and available in the DOM. It’s crucial for ensuring that these operations only occur when the component is ready, thus preventing issues like attempting to manipulate or fetch data for a component that isn't yet mounted.

**Question 3 = Why do we use `componentWillUnmount`? Show with `example`.**

**Answer =  ***The `componentWillUnmount` lifecycle method is used in React class-based components to perform cleanup tasks when a component is about to be removed (unmounted) from the DOM. It’s crucial for avoiding memory leaks, unsubscribing from events, and cleaning up any resources that were set up when the component was mounted.*

### Key Reasons for Using `componentWillUnmount`:

1. **Cleaning Up Subscriptions and Event Listeners:**
    - If you’ve set up any event listeners or subscriptions (like to a WebSocket, data stream, or a global state), you should remove them in `componentWillUnmount` to prevent memory leaks or unintended behavior after the component is unmounted.
2. **Clearing Timers or Intervals:**
    - If your component uses `setInterval`, `setTimeout`, or any other timer, clearing these in `componentWillUnmount` ensures they don’t continue running after the component is no longer in the DOM.
3. **Canceling Ongoing Network Requests:**
    - If your component is fetching data or making network requests, you might want to cancel those requests if the component is unmounted before they complete. This helps avoid updating the state on an unmounted component, which can lead to errors.

### Example: Cleaning Up an Event Listener and Interval

```jsx
javascriptCopy code
class MyComponent extends React.Component {
  componentDidMount() {
    // Setting up an event listener
    window.addEventListener('resize', this.handleResize);

    // Starting an interval
    this.interval = setInterval(this.tick, 1000);
  }

  handleResize = () => {
    // Handle the window resize event
    console.log('Window resized:', window.innerWidth);
  };

  tick = () => {
    console.log('Tick:', new Date().toLocaleTimeString());
  };

  componentWillUnmount() {
    // Clean up the event listener
    window.removeEventListener('resize', this.handleResize);

    // Clear the interval
    clearInterval(this.interval);
  }

  render() {
    return <div>Check the console for updates.</div>;
  }
}

export default MyComponent;

```

### How This Works:

- **`componentDidMount`**:
    - Adds a resize event listener to the `window` object.
    - Sets up an interval that logs the current time every second.
- **`componentWillUnmount`**:
    - Removes the resize event listener when the component is about to be unmounted, preventing it from trying to handle events after the component is gone.
    - Clears the interval, ensuring that the `tick` function stops running once the component is unmounted.

### Summary:

`componentWillUnmount` is essential for ensuring that components clean up after themselves. It helps prevent memory leaks, unintended side effects, and errors that can occur if resources continue to be used after the component is unmounted. This method is particularly important in larger applications or when dealing with complex interactions with external resources.

**(Research) 4 = Why do we use `super(props)` in `constructor`?**

***The use of `super(props)` in the `constructor` method of a React class-based component is rooted in how JavaScript classes and inheritance work, particularly with ES6 class syntax.***

### Key Reasons for Using `super(props)`:

1. **Calling the Parent Class's Constructor:**
    - In JavaScript, when a class extends another class (i.e., when a component extends `React.Component`), the derived class must call the constructor of its parent class before accessing `this`. This is because `this` is not defined until the parent class's constructor has been called.
    - The `super` keyword is used to call functions on an object's parent. In this case, `super(props)` calls the constructor of the `React.Component` class, allowing the derived component to inherit methods and properties from the parent class.
2. **Passing Props to the Parent Class:**
    - When you pass `props` to `super`, it allows the parent class (`React.Component`) to initialize the component with the given props. This is important because `React.Component` uses `props` to initialize the component's state and other properties.
    - If you don’t pass `props` to `super`, you won’t be able to access `this.props` inside the constructor, leading to potential issues if your component relies on props during initialization.
3. **Accessing `this.props` in the Constructor:**
    - By passing `props` to `super`, you ensure that `this.props` is correctly set up in the constructor. This is useful if you want to use `props` to initialize the component's state or perform other setup tasks.

### Example:

```jsx
javascriptCopy code
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    // Calling the parent class's constructor with the passed props
    super(props);

    // Now `this.props` is accessible
    this.state = {
      count: this.props.initialCount || 0
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default MyComponent;

```

### What Happens If You Don’t Use `super(props)`?

- If you don’t call `super(props)` in the constructor, you’ll run into an error like this:
    
    ```jsx
    javascriptCopy code
    Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    
    ```
    
- This error occurs because the `this` keyword cannot be used until the parent class’s constructor has been executed. Without `super(props)`, `this.props` would be `undefined` in the constructor, leading to issues if your component relies on `props`.

### Summary:

- **`super(props)`** is used in React class components to ensure that the parent class’s constructor (`React.Component`) is called with the correct props. This allows the component to properly initialize with the provided props and access them via `this.props` in the constructor. It's a fundamental part of how class inheritance works in JavaScript, ensuring that the component behaves as expected.

**(Research) 5 = Why `can't we have` the `callback function` of `useEffect async`?**

*The reason you can't have the callback function of `useEffect` be `async` is mainly due to how `useEffect` is designed and how it expects return values.*

*In React, `useEffect` is expected to return either nothing or a cleanup function. If you make the callback `async`, it implicitly returns a `Promise`, which conflicts with the expected return type. React uses the return value for cleanup purposes, such as unsubscribing from events or canceling network requests. Allowing `async` functions would introduce ambiguity because the cleanup logic might depend on whether the effect completes or not.*

*Moreover, using an `async` function in `useEffect` can lead to unintended behavior or difficult-to-trace bugs. Instead, you can define an async function inside the `useEffect` and call it, or use promises directly within the `useEffect` callback.*

*This design choice also encourages better separation of concerns, where `useEffect` is responsible for managing side effects and any asynchronous operations are handled explicitly within its body*