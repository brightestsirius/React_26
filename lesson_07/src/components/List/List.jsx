import React, { useState, useEffect } from "react";
import "./style.sass";

import { getRandomInt } from "./../../utils/utils";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [borderWidth, setBorderWidth] = useState(0);
  const [activateInterval, setActivateInterval] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const unactiveItems = list.filter((item) => !item.active);
      const randomIndex = getRandomInt(0, unactiveItems.length);
      const randomItem = unactiveItems[randomIndex];

      setList((prevState) =>
        prevState.map((item) => {
          if (item === randomItem) item.active = true;
          return item;
        })
      );
    }, 1000);

    setActivateInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const unactiveItems = list.filter((item) => !item.active);

    if (unactiveItems.length === Math.round(list.length / 2)) {
      setBorderWidth(`10px`);
    }

    if (!unactiveItems.length) {
      clearInterval(activateInterval);
      setBorderWidth(`20px`);
    }
  }, [list]);

  return list.length ? (
    <table style={{ borderWidth }}>
      <tbody>
        {list.map((item, index) => (
          <tr key={index} className={item.active ? `active` : ``}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}