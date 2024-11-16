import ToDoApp from "./TodoApp";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./WelComeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  /*   const initialTodoItems =[
    {
        Name :"Buy Fish",
        DueDate: "4/06/2024",
    },

    {
      Name :"Buy Fish",
      DueDate: "4/06/2024",
  },

  {
    Name :"buy meat",
    DueDate: "Right Now",
},
  ] */

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {


    /* Old value --->Update value */

 /*    console.log(`New Item add: ${itemName} New Date Add:${itemDueDate}`); */

   /*  const newTodoItems = [
      ...todoItems,
      { Name: itemName, DueDate: itemDueDate },
    ]; */



     /* Functional Update (direct current value)*/

   /*  setTodoItems((currValue)=>{
      const newTodoItems = [
        ...currValue,
        { Name: itemName, DueDate: itemDueDate },
      ];
        return newTodoItems;
    });
 */

    /* Functional Update (direct current value) */
     

    setTodoItems((currValue)=>
      [
        ...currValue,
        { Name: itemName, DueDate: itemDueDate },
      ]
        
    );



  };

  /* Detele button  clickable korar jonno */

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.Name !== todoItemName);

    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <ToDoApp />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
