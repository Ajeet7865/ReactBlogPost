// src/features/todos/TodosList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo } from './todoSlice';

const TodosList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const status = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTodos());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    let content;

    if (status === 'loading') {
        content = <div className="alert alert-info">Loading todos...</div>;
    }
    else if (status === 'succeeded' && todos.length === 0) {
        // Display 'No todos found' when the list is empty
        content = <div className="alert alert-warning text-center">No todos found</div>;
      } 
    else if (status === 'succeeded') {
        content = (
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{todo.title}</span>
                        <button onClick={() => handleDelete(todo.id)} className="btn btn-danger btn-sm">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        );
    } else if (status === 'failed') {
        content = <div className="alert alert-danger">Error: {error}</div>;
    }

    return (
        <div className="card p-3 mt-4">
            <h3 className="text-center">Your Todos</h3>
            {content}
        </div>
    );
};

export default TodosList;
