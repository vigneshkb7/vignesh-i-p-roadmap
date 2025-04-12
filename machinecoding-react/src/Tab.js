import React, { useState } from "react";
const tabData = [
  { label: "Home", content: <div>🏠 Welcome to Home</div> },
  { label: "Profile", content: <div>👤 Profile Info</div> },
  { label: "Settings", content: <div>⚙️ Settings Panel</div> },
];
const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div style={styles.tabHeader}>
        {tabData.map((tab, index) => (
          <button
            key={index}
            style={{
              ...styles.tabButton,
              borderBottom: activeIndex === index ? "2px solid blue" : "none",
              fontWeight: activeIndex === index ? "bold" : "normal",
            }}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={styles.tabContent}>{tabData[activeIndex].content}</div>
    </div>
  );
};

const styles = {
  tabHeader: {
    display: "flex",
    borderBottom: "1px solid #ccc",
    marginBottom: 10,
  },
  tabButton: {
    padding: "10px 20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
  tabContent: {
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 4,
  },
};

export default Tabs;
