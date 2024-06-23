# React JSX Assignment

## Question 1: What is JSX?
**Answer:**  
"JSX, or JavaScript XML, is a syntax extension that allows you to write HTML-like structures directly within your JavaScript code. It's commonly used with React to build user interfaces. JSX improves readability by keeping UI logic and structure together. While it compiles to regular JavaScript, it offers a familiar syntax for developers and simplifies component-based development in React applications.”

## Question 2: Superpowers of JSX?
**Answer:**  
- **Improved Readability:** JSX allows you to write UI components that resemble HTML, making them easier to understand and maintain. This is especially beneficial for developers familiar with HTML. By keeping your UI logic and structure together in JSX, your code becomes more self-documenting.
- **Simplified Development:** JSX lets you express UI logic directly within your JavaScript code. This eliminates the need to switch between separate template files and JavaScript code, streamlining the development workflow. You can manage data, conditional rendering, and event handling all within your JSX code.
- **Component-Based Architecture:** JSX is often used in conjunction with component-based UI development. Components written in JSX are reusable building blocks that promote code organization, maintainability, and easier collaboration.
- **Expressive and Dynamic UIs:** JSX allows you to embed JavaScript expressions and logic within your UI elements. This enables you to create dynamic and interactive user interfaces that respond to user actions and data changes.

## Question 3: Role of type attribute in script tag? What options can I use there?
**Answer:**  
The type attribute in the `<script>` tag specifies the MIME type (Multipurpose Internet Mail Extensions) of the script content. It helps the browser interpret and execute the script correctly. While the attribute is optional, it's considered good practice to include it for clarity and potential browser compatibility benefits. Here's a breakdown of the options you can use:

- **Default (No attribute or empty string):** If you omit the type attribute or leave it empty, the browser typically defaults to "text/javascript". This assumes the script contains classic JavaScript code.
- **"text/javascript" (or "application/javascript"):** This is the most common option used for classic JavaScript code. Both "text/javascript" and "application/javascript" are generally treated the same by modern browsers.
- **"module":** This option is used for modern JavaScript modules written in ES6 (ECMAScript 2015) or later. These modules typically use features like import and export statements for modular code organization.
- **"importmap":** This is a less common option used for specifying an import map, which is a way to configure how modules are loaded and resolved in your application.

## Question 4: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
**Answer:**

1. **{TitleComponent}**
   - This is a JavaScript expression that evaluates to the value of the TitleComponent variable.
   - If TitleComponent is a simple value (like a string), this would render the value itself.
   - However, in most cases, TitleComponent would be a React component.
   - In this scenario, using it within curly braces without the JSX syntax wouldn't render the component correctly.

2. **{<TitleComponent/>}**
   - This is the correct way to render a React component named TitleComponent using JSX syntax.
   - The opening and closing tags (`<` and `>`) with a forward slash (`/`) in the closing tag (`/>`) indicate a self-closing component.
   - This is common for components that don't require any child elements within them.
   - By using this syntax, React will understand that you want to render the TitleComponent.

3. **{<TitleComponent></TitleComponent>}**
   - This is also a valid way to render the TitleComponent using JSX syntax.
   - The opening and closing tags define that this is a component, and the empty space between them indicates that the component might have child elements.
   - While this syntax works, it's typically used for components that do have child elements you want to render within them.
