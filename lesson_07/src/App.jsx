import React, {useState} from "react";
import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";
import List from './components/List/List'

export default function App() {
  const [formData, setFormData] = useState();

  return (
    <>
      <Heading formData={formData} />
      <Form liftingForm={setFormData} />
      <List />
    </>
  );
}
