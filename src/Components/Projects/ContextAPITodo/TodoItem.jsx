import React, { useRef, useState } from 'react'
import { useTodo } from './TodoContext'
import toast from 'react-hot-toast'

const TodoItem = ({ todo }) => {
  //console.log(todo)
  const [isEditable, setIsEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const inputEle = useRef();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  }

  const toggleTodo = () => {
    toggleComplete(todo.id);
  }



  return (
    <div className="container">
      <div className="row align-items-center p-3 bg-light rounded shadow-sm">
        <div className="col-auto">
          <input
            type="checkbox"
            className="form-check-input"
            checked={todo.completed}
            onChange={toggleTodo}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            ref={inputEle}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isEditable}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          />
        </div>
        <div className="col-auto">
          <button
            className={`btn ${isEditable ? 'btn-success' : 'btn-info'} mr-2`}
            onClick={() => {
              if (todo.completed) return;
              inputEle.current.focus();
              if (isEditable) {
                editTodo();
                toast.success("Todo Updated");
              } else {
                setIsEditable((prev) => !prev);
              }
            }}
          >
            {isEditable ? "Update" : "Edit"}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteTodo(todo.id);
              toast.success("Todo Deleted");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>

  )
}

export default TodoItem