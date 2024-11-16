function TodoItem({todoname, todoDate, onDleteClick}) {
 
  return (
    <div className="container">
      <div className="row mk-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mk-button" onClick={()=>onDleteClick(todoname)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
