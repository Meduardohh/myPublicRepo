import { useState } from "react";

const Pic = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(prev=>!prev);
  };

  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      {clicked && <img src="https://placedog.net/300" alt="nopic" />}
    </>
  );
};

export default Pic;
