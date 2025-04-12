import React, { useState } from "react";

const initialData = [
  { id: 1, name: "App.js", type: "file" },
  { id: 2, name: "index.html", type: "file" },
  {
    id: 3,
    name: "Src",
    type: "folder",
    children: [{ id: 4, name: "components", type: "folder", children: [] }],
  },
];

let idCounter = 5;

const FileNode = ({ node, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(node.name);
  const [children, setChildren] = useState(node.children || []);

  const handleDelete = () => {
    onUpdate("delete", node);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const saveEdit = () => {
    setEditing(false);
    onUpdate("edit", { ...node, name: newName });
  };

  const addChild = (type) => {
    const newNode = {
      id: idCounter++,
      name: type === "file" ? "New File" : "New Folder",
      type,
      children: type === "folder" ? [] : undefined,
    };
    const updatedChildren = [...children, newNode];
    setChildren(updatedChildren);
    onUpdate("edit", { ...node, children: updatedChildren });
  };

  const updateChild = (action, childNode) => {
    let updated = [...children];
    if (action === "delete") {
      updated = updated.filter((child) => child.id !== childNode.id);
    } else if (action === "edit") {
      updated = updated.map((child) =>
        child.id === childNode.id ? childNode : child
      );
    }
    setChildren(updated);
    onUpdate("edit", { ...node, children: updated });
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>{node.type === "file" ? "📄" : "📁"}</span>
        {isEditing ? (
          <>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={saveEdit}>✔</button>
          </>
        ) : (
          <>
            <span style={{ marginLeft: 5 }}>{node.name}</span>
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete}>❌</button>
            {node.type === "folder" && (
              <>
                <button onClick={() => addChild("file")}>+File</button>
                <button onClick={() => addChild("folder")}>+Folder</button>
              </>
            )}
          </>
        )}
      </div>
      {node.type === "folder" &&
        children.map((child) => (
          <FileNode key={child.id} node={child} onUpdate={updateChild} />
        ))}
    </div>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(initialData);

  const updateRoot = (action, node) => {
    let updated = [...data];
    if (action === "delete") {
      updated = updated.filter((item) => item.id !== node.id);
    } else if (action === "edit") {
      updated = updated.map((item) => (item.id === node.id ? node : item));
    }
    setData(updated);
  };

  const addRoot = (type) => {
    const newNode = {
      id: idCounter++,
      name: type === "file" ? "New File" : "New Folder",
      type,
      children: type === "folder" ? [] : undefined,
    };
    setData([...data, newNode]);
  };

  return (
    <div>
      <h3>📁 File Explorer</h3>
      <button onClick={() => addRoot("file")}>+ File</button>
      <button onClick={() => addRoot("folder")}>+ Folder</button>
      <div>
        {data.map((node) => (
          <FileNode key={node.id} node={node} onUpdate={updateRoot} />
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
