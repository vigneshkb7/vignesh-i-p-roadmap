import React, { useState, useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const fetchMoreData = async () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from(
          { length: 10 },
          (_, i) => `Item ${prevItems.length + i + 1}`
        ),
      ]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (page > 1) {
      fetchMoreData();
    }
  }, [page]);

  return (
    <div className="infinite-scroll-container">
      <h2>Infinite Scroll List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="scroll-item">
            {item}
          </li>
        ))}
      </ul>
      <div ref={loader} className="loading">
        {loading && <p>Loading more items...</p>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
