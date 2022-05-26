import { useEffect, useState } from "react";
import { createUser, readUser } from "../services/crud";

const Chat = () => {
  const [user, setUser] = useState();
  const [msg, setMsg] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    readUser()
      .then((messages) => setMessages(Object.entries(messages.val())))
      .then((log) => console.log(log));
  }, [msg]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(e.target.user.value);
    console.log(messages);
  };

  const chatSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
    createUser({ user: user, msg: e.target.text.value });
    setMsg(e.target.text.value);
  };

  return (
    <div className="chatWindow">
      <form onSubmit={submitHandler}>
        <input name="user" type="text"></input>
        <button type="submit">Chatre fel</button>
      </form>
      {messages.map((message) => {
        return <div>{`${message[1].user}:${message[1].msg}`}</div>;
      })}
      <form onSubmit={chatSubmitHandler}>
        <div className="chat-area"></div>
        <input type="text" name="text"></input>
        <button type="submit" name="send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
