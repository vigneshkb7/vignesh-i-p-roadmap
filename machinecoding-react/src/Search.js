import React, { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResult] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  const searchQuery = async () => {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
    const data = await res.json();
    console.log(data);
    setSearchResult(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchQuery();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
      {showList && <div>{}</div>}
    </div>
  );
};

export default Search;
