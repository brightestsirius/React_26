import React from "react";

export default function Input({ value, setValue }) {
  const handleChange = (e) => setValue(e.target.value);
  
  return <input type="text" value={value} onChange={handleChange} />;
}
