import React from "react";

import useParam from "../../hooks/useParam";

export default function User() {
  const userId = useParam(`userId`);

  return <div>User {userId}</div>;
}
