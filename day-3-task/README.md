# 🧩 Day 03 Tasks — Compound Components Pattern

## 🛠️ Tasks

### 1. Build a Simple `Card` Component
Create a `Card` component using the **Compound Components Pattern**.  
Your card should include:
- `<Card.Header>`
- `<Card.Body>`
- `<Card.Footer>`

#### Example Usage:
```jsx
<Card>
  <Card.Header>Profile</Card.Header>
  <Card.Body>This is a simple compound Card component.</Card.Body>
  <Card.Footer>Footer Info</Card.Footer>
</Card>
```

### 2. Add a Card.Image Component
Extend your Card component with an optional image area.

#### Example Usage:
```jsx
<Card>
  <Card.Image src="/user.png" alt="User Avatar" />
  <Card.Body>User profile details go here...</Card.Body>
</Card>
```

✅ Try using it in different ways and observe how clean and flexible your code becomes — no more bloated props!

### 3. Create a Tabs Component
Build a reusable Tabs component using the same pattern.

#### Example Usage:
```jsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab>Home</Tabs.Tab>
    <Tabs.Tab>Profile</Tabs.Tab>
    <Tabs.Tab>Settings</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel>Home Content</Tabs.Panel>
  <Tabs.Panel>Profile Content</Tabs.Panel>
  <Tabs.Panel>Settings Content</Tabs.Panel>
</Tabs>
```

## 🚀 Learning Outcome

By completing today's tasks, you'll be able to:
- Build flexible and composable UI components
- Reduce props complexity and improve readability
- Understand how modern UI libraries implement reusable patterns
- Write cleaner, modular, and professional-quality React code

## 🧩 Design Pattern Focus

- **Pattern Name**: Compound Components
- **Core Idea**: Allow parent and child components to work together implicitly using composition instead of prop drilling.