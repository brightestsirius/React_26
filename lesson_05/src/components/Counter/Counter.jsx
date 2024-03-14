import React, { useState, useRef, useEffect } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [handleValue, setHandleValue] = useState(``);

  const valueInput = useRef();

  useEffect(() => {
    if(handleValue){
        setHandleValue(``);
        valueInput.current.blur();
    }
  }, [counter])

  const decrement = () => setCounter(prevState => prevState-1);
  const increment = () => setCounter(prevState => prevState+1);
  const handleChange = (e) => setHandleValue(+e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setCounter(handleValue);
  }

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <form onSubmit={handleSubmit}>
        <input ref={valueInput} type="number" value={handleValue} onChange={handleChange} />
      </form>
    </div>
  );
}
