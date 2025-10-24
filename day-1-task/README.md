# Product List (Container–Presenter Pattern)

This mini React architecture follows the **Container–Presenter Pattern** to ensure a clean separation of concerns between data logic and UI rendering.

## Goals

* Keep **business logic** out of UI components
* Make components **reusable & testable**
* Improve **maintainability & scalability**

---

##  Architecture Overview

### 1. `ProductListContainer` (Container Component)

Responsible for **application logic**, including:

* Fetching product list from API
* Managing cart state (add/remove/update)
* Handling loading & error states
* Passing props to presenter
* API :http://localhost:3001

 No JSX/UI rendering here
 Logic only

### 2. `ProductListPresenter` (Presenter Component)

Responsible for **UI rendering**, including:

* Rendering product list
* Displaying sort/filter controls
* Handling "Add to Cart" UI clicks
* Calling container callbacks

 No API calls or state logic
 UI only

---

## 📦 Sub Presenters (Smaller UI Components)

| Component            | Responsibility                              |
| -------------------- | ------------------------------------------- |
| `ProductCard`        | Show image, name, price, Add to Cart button |
| `SortAndSearch` | Render sort/filter UI + handle changes      |
| `CartItem`        | Show total price & items count              |

These are **dumb components** — they receive everything via props.

---

##  Success Criteria

* Container has **zero JSX**
* Presenter has **zero logic**
* Sub-presenters are **reusable & testable**
* API logic isolated from UI

---

## 🗂 Example File Structure

```
src/
  components/
    common/
      ErrorMassage.jsx
      Loading.jsx

    ProductContainer.jsx
    ProductPresenter.jsx
    ProductCard.jsx
    SortAndSearch.jsx
    CartItem.jsx
```

---

## 🚀 Benefits

* Easy to test container independently
* Easy to mock data for presenter in Storybook/UI tests
* Swappable UI (you can redesign presenter without touching logic)
* Easier scaling when app grows

---

## 🧩 Next Steps

* Implement `ProductContainer`
* Implement `ProductPresenter`
* Implement sub-presenters one by one

---

## ⚙️ Installation & Setup

```
npm install
npm start
```

Or using Yarn:

```
yarn install
yarn start
```

---

## 📡 API Response Shape (Example)

```json
[
  {
    "id": "1",
    "name": "Wireless Bluetooth Headphones",
    "description": "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    "price": 199.99,
    "originalPrice": 249.99,
    "categoryId": "1",
    "category": "Electronics",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    "rating": 4.5,
    "reviewCount": 128,
    "inStock": true,
    "stock": 45,
    "brand": "AudioTech",
    "tags": [
      "wireless",
      "bluetooth",
      "noise-cancelling"
    ],
    "features": [
      "30-hour battery",
      "Active noise cancellation",
      "Quick charge",
      "Wireless connectivity"
    ],
    "createdAt": "2024-01-01T00:00:00Z"
  },
  
]
```

---

## 🛒 Cart Logic Overview

| Action                    | Description                                       |
| ------------------------- | ------------------------------------------------- |
| addToCart(product)        | Adds item to cart or increases quantity if exists |
| removeFromCart(id)        | Removes product entirely                          |
| updateQuantity(id, +1/-1) | Increases or decreases quantity                   |
| calculateTotal()          | Computes total price based on cart items          |

---

## 🧠 Error & Loading States

| State   | Behavior                      |
| ------- | ----------------------------- |
| loading | Show skeleton or loader in UI |
| error   | Show retry UI or message      |
| success | Renders ProductListPresenter  |

---

## 🧪 Testing Strategy

| Layer          | How to test                              |
| -------------- | ---------------------------------------- |
| Container      | Test API calls + state logic using mocks |
| Presenter      | Snapshot + interaction tests             |
| Sub components | Unit test props rendering                |

---

## 🚀 Future Enhancements

* Pagination / Infinite scroll
* Better filtering (category based)
* React Query integration for caching
* Toast notifications on cart actions
