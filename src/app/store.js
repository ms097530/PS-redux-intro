import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// 1. create store
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})