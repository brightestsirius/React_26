import React, { useState, useEffect, memo } from "react";

export default memo(function FormUser({liftingUser}) {
  console.log(`in FormUser`);

  const [user, setUser] = useState({
    name: `Taras`,
    surname: `Sheva`,
  });

  const handleUserName = (e) =>
    setUser((prevState) => ({ ...prevState, name: e.target.value }));
  const handleUserSurname = (e) =>
    setUser((prevState) => ({ ...prevState, surname: e.target.value }));

  useEffect(() => {
    liftingUser(user);
  }, [user]);

  return (
    <fieldset>
      <legend>User</legend>
      <label>
        Name:{" "}
        <input type="text" defaultValue={user.name} onChange={handleUserName} />
      </label>
      <label>
        Surname:{" "}
        <input
          type="text"
          defaultValue={user.surname}
          onChange={handleUserSurname}
        />
      </label>
    </fieldset>
  );
})
