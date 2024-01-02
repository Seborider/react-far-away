import React, { useState } from "react";
import "./App.css";
import { Item } from "./types/types";
import Logo from "./components/logo-component";
import Form from "./components/form-component";
import PackingList from "./components/packing-list-component";

import Stats from "./components/stats-component";

/*const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },

];*/

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItem(item: Item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
