import { useSelector, useDispatch } from "react-redux"
import { create, remove } from "../features/todos/todosSlice"

export default function Todos()
{
    const todos = useSelector((state) => state.todos.todosData)
    const dispatch = useDispatch()
    // console.log('todos:', todos)
    console.log('render todos')

    const handleEnter = (e) =>
    {
        if (e.key === 'Enter' && e.target.value.trim() !== '')
        {
            dispatch(create({ id: Date.now(), text: e.target.value }))
            e.target.value = ''
        }
    }

    const handleRemove = (id) =>
    {
        dispatch(remove(id))
    }

    return (
        <div>
            <h2>Todos</h2>
            <input type="text" name="" id="" onKeyDown={handleEnter} />
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.text}</p>
                        <button onClick={() => handleRemove(todo.id)}>X</button>
                    </div>
                ))
            }
        </div>

    )
}
