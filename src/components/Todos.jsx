import { useSelector, useDispatch } from "react-redux"
import { create } from "../features/todos/todosSlice"

export default function Todos()
{
    const todos = useSelector((state) => state.todos.todosData)
    const dispatch = useDispatch()
    console.log('todos:', todos)

    const handleEnter = (e) =>
    {
        if (e.key === 'Enter' && e.target.value.trim() !== '')
        {
            dispatch(create({ id: Date.now(), text: e.target.value }))
            e.target.value = ''
        }
    }

    return (
        <div>
            <h2>Todos</h2>
            <input type="text" name="" id="" onKeyDown={handleEnter} />
            {
                todos.map((todo) => <p key={todo.id}>{todo.text}</p>)
            }
        </div>

    )
}
