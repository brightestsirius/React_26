import React, { useState, useEffect } from "react";

export default function ListFn({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [removeItemInt, setRemoveItemInt] = useState();

  useEffect(() => {
      const interval = setInterval(() => {
        console.log(`in interval`);
        setList(prevState => prevState.slice(0, -1));
      }, 1000);

      setRemoveItemInt(interval);

      return () => {
        console.log(`in componentWillUnmount in first useEffect`);
        clearInterval(interval);
      }
  }, []);

  useEffect(() => {
    !list.length && clearInterval(removeItemInt);

    return () => {
      console.log(`in componentWillUnmount in second useEffect`);
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
