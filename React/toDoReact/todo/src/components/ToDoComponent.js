import ToDoList from "./ToDoList";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

const ToDoComponent = ({toDoArr,setToDoArr}) => {
  return (
    <>
      <h4>To Do list</h4>
      <ToDoList  setToDoArr={setToDoArr} toDoArr={toDoArr}>
      </ToDoList>
      <ToDoForm
        toDoArr={toDoArr}
        setToDoArr={setToDoArr}
      ></ToDoForm>
    </>
  );
};

export default ToDoComponent;
