# Day 04 — Render Props Toggle Component

This project demonstrates how to build a reusable **Toggle component** using the **Render Props Pattern** in React.  
The Toggle component manages its own internal `isOpen` state and exposes both the state and the toggle function to the parent through a function-based child.

---

## 🚀 Overview

In this project, you will learn:

- What the Render Props pattern is  
- How to pass UI as a function (function as children)  
- How to separate logic from UI  
- How to build a fully flexible Toggle component  
- Real use cases such as dropdowns, modals, FAQ accordion, sidebar toggle, etc.

---

## 🧠 What Are Render Props?

**Render Props** is a React design pattern where a component accepts a function as its child.  
This function receives data or state and returns UI.

Example:

```jsx
<Toggle>
  {(isOpen, toggle) => <button onClick={toggle}>Click</button>}
</Toggle>
