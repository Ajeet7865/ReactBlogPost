import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { TodoProvider, useTodo } from './TodoContext'

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => item.id == id ? todo : item));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));

  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((item) => item.id == id ? { ...item, completed: !item.completed } : item));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("contextTodo"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contextTodo", JSON.stringify(todos));
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className='container'>
        <div className="row">
          <div className="col-sm-12">
            <h1 className='text-center'>Manage Your Todos</h1>
          </div>
        </div>
        <TodoForm />

        {
          todos.map((item) => {
            return <TodoItem key={item.id} todo={item} />
          })
        }


      </div>
    </TodoProvider>
  )
}

export default Todo