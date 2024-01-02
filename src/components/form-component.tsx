import { FormProps, Item } from "../types/types";
import React, { useState } from "react";

export default function Form({ onHandleAddItems }: FormProps) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (!description) return;
    const newItem: Item = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onHandleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
