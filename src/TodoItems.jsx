import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDleteClick }) => {
  return (
    <div className="to-docontainer">
      {todoItems.map((item) => (
        <TodoItem
        key={item.Name} /* Uniq key */
          todoname={item.Name}
          todoDate={item.DueDate}
          onDleteClick={onDleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
