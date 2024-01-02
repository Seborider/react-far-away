import { PackingListProps } from "../types/types";
import React, { useState } from "react";
import Item from "./item-component";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems &&
          sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="name">Sort by name</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear the list</button>
      </div>
    </div>
  );
}
