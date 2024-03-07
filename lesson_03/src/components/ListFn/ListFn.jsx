import React, { useState, useEffect } from "react";

export default function ListFn({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [color, setColor] = useState(`black`);
  const [heading, setHeading] = useState(`Heading`);

  useEffect(() => {
    setTimeout(() => {
      setList(list.slice(0, -1));
    }, 1000);

    setTimeout(() => {
      setHeading(`Heading Changed`);
    }, 2000);
  }, []);

  useEffect(() => {
    if (propsList !== list) setColor(`crimson`);
  }, [list]);

  useEffect(() => {
    if (propsList !== list) setColor(`green`);
  }, [heading]);

  return (
    <>
      <h3>{heading}</h3>
      {list.length ? (
        <ul style={{ color }}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
