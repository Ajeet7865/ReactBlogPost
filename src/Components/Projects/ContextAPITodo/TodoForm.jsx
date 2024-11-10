import React, { useState } from 'react'
import { useTodo } from './TodoContext';

const TodoForm = () => {

  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }

    addTodo({ todo, completed: false })
    setTodo("");

  }



  return (
    <form onSubmit={add}>
      <div className="row">
        <div className="col-sm-8 offset-2">
          <div className="input-group">
            <input type="text"
              className='form-control'
              placeholder='Add Todo Here..'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <div className="input-group-append">
              <button className='btn btn-success' type='submit'>Add Todo</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default TodoForm