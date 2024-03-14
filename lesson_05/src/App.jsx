import React, {useState, useEffect} from 'react'
import Counter from './components/Counter/Counter'

export default function App() {
  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowCounter(false);
    }, 5000)
  }, [])

  return (
    <>
    {showCounter && <Counter />}
    </>
  )
}