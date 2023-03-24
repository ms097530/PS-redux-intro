import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todosReducer from '../features/todos/todosSlice'

// 1. create store
export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})