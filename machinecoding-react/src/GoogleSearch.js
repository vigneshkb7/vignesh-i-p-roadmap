// components/LiveSearchBar.jsx
import React, { useState, useEffect, useCallback } from "react";

const LiveSearchBar = ({
  onSearch,
  delay = 500,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Update the debounced value after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(handler);
  }, [query, delay]);

  // Call the onSearch callback when debounced query changes
  useEffect(() => {
    if (onSearch && typeof onSearch === "function") {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: "8px 12px",
        width: "100%",
        maxWidth: "300px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
      }}
    />
  );
};

const GoogleSearch = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);

    // Simulate search/API call
    const dummyData = ["apple", "banana", "orange", "grape"];
    const filtered = dummyData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Live Search Example</h2>
      <LiveSearchBar onSearch={handleSearch} delay={1000} />
      <ul>
        {results.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSearch;
