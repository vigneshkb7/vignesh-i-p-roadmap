import React, { useState } from "react";
import "./Products.css"; // Import the CSS file

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    popularity: 5,
    date: "2025-03-10",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    popularity: 9,
    date: "2025-03-05",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    category: "Accessories",
    popularity: 8,
    date: "2025-02-25",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    category: "Wearables",
    popularity: 6,
    date: "2025-03-08",
  },
  {
    id: 5,
    name: "Tablet",
    price: 499,
    category: "Electronics",
    popularity: 7,
    date: "2025-02-15",
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 399,
    category: "Gaming",
    popularity: 10,
    date: "2025-03-12",
  },
];

const categories = ["All", "Electronics", "Accessories", "Wearables", "Gaming"];
const sortingOptions = ["Price: Low to High", "Popularity", "Newest"];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1000); // Default max price
  const [sortBy, setSortBy] = useState("Price: Low to High");

  // Filter products based on category and price
  let filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= priceRange
  );

  // Sorting logic
  filteredProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Popularity") return b.popularity - a.popularity;
    if (sortBy === "Newest")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    return 0;
  });

  return (
    <div className="container">
      {/* Filter & Sorting Section */}
      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="range"
          min="100"
          max="1000"
          step="100"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
        />
        <span>Max Price: ${priceRange}</span>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="grid-item">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
