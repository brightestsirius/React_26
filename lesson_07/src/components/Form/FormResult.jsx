import React from "react";

export default function FormResult({ user = {}, styles = {} }) {
  return (
    <fieldset>
      <legend>Result:</legend>
      <h4 style={styles}>
        {user.name} {user.surname}
      </h4>
    </fieldset>
  );
}
