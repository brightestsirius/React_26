import React, { useState } from "react";
import "./style.sass";

import FormResult from "./FormResult";
import FormUser from "./FormUser";
import FormStyle from "./FormStyle";

export default function Form() {
  const [user, setUser] = useState({});
  const [style, setStyle] = useState({});

  return (
    <form>
      <FormResult user={user} style={style} />
      <FormUser liftingUser={setUser} />
      <FormStyle liftingStyle={setStyle} />
    </form>
  );
}