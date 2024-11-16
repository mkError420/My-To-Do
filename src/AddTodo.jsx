import { /* useState, */ useRef} from "react";

function AddTodo({ onNewItem }) {
 /*  const [todoName, setTodoName] = useState("");
  const [duDate, setDuDate] = useState("");
 */
  const todoNameElement =useRef();
  const dueDateElement =useRef();

 /*  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    nuOfUpdates.current +=1;
    
  };

  const handleDateChange = (event) => {
    setDuDate(event.target.value);
    console.log(`noOfUpdate are: ${nuOfUpdates.current}`);
  }; */

  const handleAddButtonClick = (event) => {
  const todoName = todoNameElement.current.value;
  const duDate = dueDateElement.current.value;
  

    event.preventDefault();

    onNewItem(todoName, duDate);

    todoNameElement.current.value = ("");
    dueDateElement.current.value = ("");

    /* setDuDate("");
    setTodoName(""); */
  };

  return (
    <div className="container text-center">
      <form className="row mk-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter your list"
           /*  value={todoName} */
            /* onChange={handleNameChange} */
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} /* value={duDate} */ /* onChange={handleDateChange} */ />
        </div>
        <div className="col-2">
          <button
            /* type="button" */ className="btn btn-success mk-button" /* onClick={handleAddButtonClick} */
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
