import React, {useState, useEffect} from "react";
import './style.sass';

// hook -> fn which start with "use"

// useEffect( ()=>{ ... } )
// useEffect( ()=>{...}, [] ) === componentDidMount
// useEffect( ()=>{...}, [value] ) === componentDidUpdate(value)

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState(`crimson`);

    useEffect(() => {
        console.log(`in useEffect`);

        // const interval = setInterval(() => {
        //     setCounter((prevState) => prevState+1);
        // }, 1000);

        setTimeout(() => {
            setColor(`green`);
        }, 1500);

        setTimeout(() => {
            setColor(`blue`);
        }, 3000);

        return () => {
            console.log(`in componentWillUnmount`);
            // clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        console.log(`in useEffect for color`, color);

        return () => {
            console.log(`in componentWillUnmount in useEffect for color`, color);
        }
    }, [color])

    // useEffect(() => {
    //     console.log(`in useEffect for counter`, counter);
    // }, [counter])

    // useEffect(() => {
    //     console.log(`in useEffect for counter && color`, counter, color);
    // }, [counter, color])

  return <div className="counter">
    <button>-</button>
    <span style={{color}}>{counter}</span>
    <button>+</button>
  </div>;
}
