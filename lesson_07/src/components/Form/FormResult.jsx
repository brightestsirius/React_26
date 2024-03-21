import React, {memo} from "react";

export default memo(function FormResult({ style = {}, user = {} }) {
  console.log(`in FormResult`);
  
  return (
    <fieldset>
      <legend>Result</legend>
      <h4 style={style}>
        {user.name} {user.surname}
      </h4>
    </fieldset>
  );
});