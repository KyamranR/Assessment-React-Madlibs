### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a JavaScript library for building user interfaces, commonly used for its efficiency in creating dynamic web applications by managing UI state and reactivity.
- What is Babel?
  - Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into compatible JavaScript for older browsers.
- What is JSX?
  - JSX is a syntax extension for JavaScript that looks like HTML, allowing you to write UI components in a readable, HTML-like syntax within JavaScript.
- How is a Component created in React?
  - A Component in React is created using a JavaScript function or class that returns JSX to render part of the UI.
- What are some difference between state and props?
  - State is a mutable object managed within a component, while props are immutable data passed to components from a parent.
- What does "downward data flow" refer to in React?
  - Downward data flow refers to the practice in React where data is passed from parent components to child components.
- What is a controlled component?
  - A controlled component is a form component where React manages the form input values via state.
- What is an uncontrolled component?
  - An uncontrolled component is a form component where the DOM itself handles the form input values, rather than React.
- What is the purpose of the `key` prop when rendering a list of components?
  - The purpose of the key prop is to provide a stable identifier for list items to help React track changes efficiently when rendering lists.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - Using an array index as a key can lead to issues with reordering and performance because it may not be unique or stable.
- Describe useEffect. What use cases is it used for in React components?
  - useEffect is a hook for handling side effects in React components, such as fetching data, updating the DOM, or setting up subscriptions.
- What does useRef do? Does a change to a ref value cause a rerender of a component?
  - useRef creates a persistent reference that doesn't cause re-renders when updated; it’s often used to access or modify DOM elements directly.
- When would you use a ref? When wouldn't you use one?
  - You use a ref for accessing the DOM directly or storing a mutable value across renders; avoid using refs for reactive data, as they don't trigger updates.
- What is a custom hook in React? When would you want to write one?
  - A custom hook is a reusable function that encapsulates specific logic for use in multiple components, helping to organize and reuse code.
