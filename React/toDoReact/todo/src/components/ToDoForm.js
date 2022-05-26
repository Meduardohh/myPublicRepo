const ToDoForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newObj = {
      todo: e.target.todo.value,
      done: false,
    };
    const newData = [...props.toDoArr, newObj];
    props.setToDoArr(newData);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input name="todo" placeholder="Write your to do"></input>
        <button type="submit">Add to do</button>
      </form>
    </>
  );
};

export default ToDoForm;
