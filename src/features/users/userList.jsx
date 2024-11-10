// src/features/users/UsersList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        if (status === 'idle') {    
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        content = (
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        );
    } else if (status === 'failed') {
        content = <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User List From Axios API</h1>
            {content}
        </div>
    );
};

export default UsersList;
