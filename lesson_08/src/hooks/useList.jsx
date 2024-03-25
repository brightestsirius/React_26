import React, { useState, useMemo, useCallback } from "react";
import useLocalStorage from './useLocalStorage'

export default function useList() {
  const [list, setList] = useState([`lion`, `tiger`, `dog`, `cat`]);

  const [color, setColor] = useLocalStorage(`color`,  `#000000`);
  const [sort, setSort] = useLocalStorage(`sort`,  `ASC`);

  const sortedList = useMemo(() => {
    return sort===`ASC` ? list.sort() : list.sort().reverse();
  }, [list, sort]);

  const getClass = useCallback(() => {
    return color === `#ff0000` ? `error` : `normal`;
  }, [color]);

  const deleteItem = (index) =>
    setList((prevState) => prevState.filter((item, i) => i !== index));

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  return { color, setColor, getClass, sortedList, deleteItem, handleSort, sort };
}