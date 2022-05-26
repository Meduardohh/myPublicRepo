import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoArr,setToDoArr }) => {
    return toDoArr.map((item, index) => {
       return <ToDoItem setToDoArr={setToDoArr} toDoArr={toDoArr} index={index} item={item.todo} key={`arr${index}`}></ToDoItem>;
    
    });

 
};

export default ToDoList;
