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
            state.todosData.push(action.payload)
        }
    }
})

export const { create } = todosSlice.actions
export default todosSlice.reducer