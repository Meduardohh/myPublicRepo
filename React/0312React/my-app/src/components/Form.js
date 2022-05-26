import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState();
  const [gotData, setButton] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const inputHandler = (event) => {
    event.preventDefault();
    setFormData(event.target.value);
    setButton(false);
    setDisabled(false);
  };
  return (
    <>
      <form>
        <input name="username" onChange={inputHandler}></input>
        <button type="submit" disabled={gotData}>
          asd
        </button>
        {!disabled && <div>{formData}</div>}
      </form>
    </>
  );
};

export default Form;
