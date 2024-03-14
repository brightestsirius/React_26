import React, { useState, useEffect } from "react";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [removeItemInterval, setRemoveItemInterval] = useState();

  useEffect(() => {
    const int = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setRemoveItemInterval(int);

    return () => {
        console.log(`in componentWillUnmout for useEffect`);
        clearInterval(int);
    }
  }, []);

  useEffect(() => {
    console.log(`in useEffect for list`);
    if (!list.length) clearInterval(removeItemInterval);

    return () => {
        console.log(`in componentWillUnmout for useEffect for list`, list);
    }
  }, [list]);

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}
