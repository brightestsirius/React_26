import React, { useState, useEffect } from "react";
import "./style.sass";

import FormResult from "./FormResult";
import FormUser from "./FormUser";
import FormStyle from "./FormStyle";

export default function Form({ liftingForm }) {
  const [user, setUser] = useState();
  const [styles, setStyles] = useState();

  useEffect(() => {
    liftingForm({...user, ...styles});
  }, [user, styles]);

  return (
    <form>
      <FormResult user={user} styles={styles} />
      <FormUser liftingUser={setUser} />
      <FormStyle liftingStyles={setStyles} />
    </form>
  );
}
