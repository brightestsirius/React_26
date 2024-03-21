import React from "react";

export default function Heading({ formData = {} }) {
  return (
    <h2
      style={{
        color: formData.color,
        backgroundColor: formData.backgroundColor,
      }}
    >
      {formData.name} {formData.surname}
    </h2>
  );
}
