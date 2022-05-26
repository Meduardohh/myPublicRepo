const ToDoItem = ({ item, index, toDoArr, setToDoArr }) => {
  const doneHandler = (e) => {
    e.target.classList.toggle("done");
    
    setToDoArr(() => {
      const newArr = [...toDoArr];
      newArr[index].done = !newArr[index].done;
      return newArr;
    });
  };

  return (
    <div onClick={doneHandler} className="toDoItem">
      {item}
    </div>
  );
};

export default ToDoItem;
