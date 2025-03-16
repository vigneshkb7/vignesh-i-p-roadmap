import React, { useEffect } from "react";

const data = [
  {
    content: "first data",
  },
  {
    content: "second data",
  },
  {
    content: "third data",
  },
  {
    content: "fourth data",
  },
  {
    content: "first data",
  },
  {
    content: "second data",
  },
  {
    content: "third data",
  },
  {
    content: "fourth data",
  },
  {
    content: "first data",
  },
  {
    content: "second data",
  },
  {
    content: "third data",
  },
  {
    content: "fourth data",
  },
];

function Infinite() {
  const [list, setList] = React.useState([]);

  useEffect(() => {
    setList(data);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      console.log("You have reached the bottom of the page!");
      setList((prev) => [...prev, ...data]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {list.map((l, index) => (
        <div style={{ padding: "40px" }}>
          <span key={index}>{l.content}</span>
        </div>
      ))}
    </div>
  );
}

export default Infinite;
