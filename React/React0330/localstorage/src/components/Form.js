import { useState, useEffect } from "react";

const Form = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storageData = localStorage.getItem("data");
    const input = JSON.parse(storageData);
    console.log(input);
    setName(input?.name);
    setEmail(input?.email);
  }, []);

  const onChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const inputData = {
      name: name,
      email: email,
    };
    localStorage.setItem("data", JSON.stringify(inputData));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input name="name" type="text" onChange={onChange} value={name} placeholder="Name" />
        <input
          name="email"
          type="text"
          onChange={onChange}
          placeholder="Email"
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
