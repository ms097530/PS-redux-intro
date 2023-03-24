import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todosData: []
    },
    reducers:
    {
        create: (state, action) =>
        {
            // can't do this without toolkit using Immer
            state.todosData.push(action.payload)
            // without toolkit, would need to return like this to avoid mutation
            // return {
            //     ...state,
            // /    todosData: [...state.todosData, action.payload]
            // }
        },
        remove: (state, action) =>
        {
            state.todosData = state.todosData.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { create, remove } = todosSlice.actions
export default todosSlice.reducer