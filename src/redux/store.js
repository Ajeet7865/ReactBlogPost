import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/userSlice'
import todosReducer from '../features/todos/todoSlice'
import pasteReducer from '../features/pasteApp/pasteSlice'
import authReducer from '../Components/Projects/MegaBlog/authSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        todos: todosReducer,
        paste: pasteReducer,
        appwriteauth: authReducer
    },
})