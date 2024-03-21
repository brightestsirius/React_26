import React, { useState, useEffect } from "react";

export default function FormUser({liftingUser}) {
  const [user, setUser] = useState({
    name: `Taras`,
    surname: `Sheva`,
  });

  const handleName = (e) =>
    setUser((prevState) => ({ ...prevState, name: e.target.value }));
  const handleSurname = (e) =>
    setUser((prevState) => ({ ...prevState, surname: e.target.value }));

  useEffect(() => {
    liftingUser(user);
  }, [user]);

  return (
    <fieldset>
      <legend>User:</legend>
      <label>
        Name:{" "}
        <input type="text" defaultValue={user.name} onChange={handleName} />
      </label>
      <label>
        Surname:{" "}
        <input
          type="text"
          defaultValue={user.surname}
          onChange={handleSurname}
        />
      </label>
    </fieldset>
  );
}
