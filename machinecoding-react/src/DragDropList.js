import React, { useState } from "react";

const DragDropList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;
    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(draggingIndex, 1)[0];
    updatedItems.splice(index, 0, draggedItem);
    setDraggingIndex(index);
    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="drag-drop-container">
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              handleDragOver(index);
            }}
            onDragEnd={handleDragEnd}
            className={draggingIndex === index ? "dragging" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;
