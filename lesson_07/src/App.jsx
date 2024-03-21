import React, {useState} from "react";
import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";

export default function App() {
  const [formData, setFormData] = useState();

  return (
    <>
      <Heading formData={formData} />
      <Form liftingForm={setFormData} />
    </>
  );
}
