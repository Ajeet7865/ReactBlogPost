// src/features/todos/AddTodoForm.js
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import './style.css'

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');  
  const inputEle = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Todo title is required');
      inputEle.current.focus();
      return;
    }

    dispatch(addTodo({ title, completed: false }));
    setTitle('');
    setError('');  // Clear the error after successful submission
  };

  return (
    <div className="card p-3 mb-4">
      <h3 className="text-center">Add a New Todo</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group">
          <input
            type="text"
            ref={inputEle}
            className={`form-control ${error ? 'is-invalid' : ''}`}
            placeholder="Enter a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <div className="invalid-feedback">{error}</div>}  {/* Display validation error */}
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
