import React, {useEffect, useState} from "react";
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import CombineComponents from './components/CombineComponents/CombineComponents'

export default function App() {
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowList(false);
    }, 2000)
  }, [])

  return (
    <>
      {/* <Counter /> */}
      {/* {showList && <List list={[`cat`, `dog`, `lion`, `tiger`]} />} */}
      <CombineComponents />
    </>
  );
}
