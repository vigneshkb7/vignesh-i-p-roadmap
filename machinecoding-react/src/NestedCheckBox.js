import React, { useState, useEffect } from "react";

const data = {
  id: 1,
  label: "Parent",
  children: [
    {
      id: 2,
      label: "Child 1",
      children: [
        { id: 3, label: "Grandchild 1" },
        { id: 4, label: "Grandchild 2" },
      ],
    },
    {
      id: 5,
      label: "Child 2",
    },
  ],
};

const updateSelection = (node, checked) => {
  // Recursively update node and its children
  const updated = { ...node, checked };
  if (node.children) {
    updated.children = node.children.map((child) =>
      updateSelection(child, checked)
    );
  }
  return updated;
};

const syncParentState = (node) => {
  if (!node.children) return node;

  const updatedChildren = node.children.map(syncParentState);
  const allChecked = updatedChildren.every((child) => child.checked);
  const someChecked = updatedChildren.some(
    (child) => child.checked || child.partial
  );

  return {
    ...node,
    children: updatedChildren,
    checked: allChecked,
    partial: !allChecked && someChecked,
  };
};

const NestedCheckbox = ({ node, onChange }) => {
  const handleChange = (e) => {
    const checked = e.target.checked;
    const updatedNode = updateSelection(node, checked);
    onChange(updatedNode);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <label>
        <input
          type="checkbox"
          checked={!!node.checked}
          ref={(el) => {
            if (el) el.indeterminate = !!node.partial;
          }}
          onChange={handleChange}
        />
        {node.label}
      </label>

      {node.children?.map((child) => (
        <NestedCheckbox
          key={child.id}
          node={child}
          onChange={(updatedChild) => {
            const newChildren = node.children.map((c) =>
              c.id === updatedChild.id ? updatedChild : c
            );
            const updatedParent = syncParentState({
              ...node,
              children: newChildren,
            });
            onChange(updatedParent);
          }}
        />
      ))}
    </div>
  );
};

const NestedCheckboxTree = () => {
  const [treeData, setTreeData] = useState(data);

  return (
    <div>
      <h3>Nested Checkbox Tree</h3>
      <NestedCheckbox node={treeData} onChange={setTreeData} />
      <pre>{JSON.stringify(treeData, null, 2)}</pre>
    </div>
  );
};

export default NestedCheckboxTree;
