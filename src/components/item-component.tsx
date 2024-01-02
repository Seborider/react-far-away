import { ItemProps } from "../types/types";
import React from "react";

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => (onDeleteItem ? onDeleteItem(item.id) : null)}>
        ❌
      </button>
    </li>
  );
}
