//? == Selector reads data, dispatch sends out actions
import { useSelector, useDispatch } from 'react-redux'
//? == Get needed actions from slice
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

export default function Counter()
{
    //? == Selector reads data
    const count = useSelector((state) => state.counter.value)
    //? == dispatch sends out actions
    const dispatch = useDispatch()

    // console.log(count)
    // console.log(dispatch)

    // imported actions are action creators
    const handleIncrement = () => dispatch(increment())
    const handleDecrement = () => dispatch(decrement())
    const handleAddFive = () => dispatch(incrementByAmount(5))

    return (
        <div>
            <h1>Counter</h1>

            <div>
                <p>{count}</p>
                <button aria-label="increment" onClick={handleIncrement}>+1</button>
                <button aria-label="incrementByAmount" onClick={handleAddFive}>+5</button>
                <button aria-label="decrement" onClick={handleDecrement}>-1</button>
            </div>
        </div>
    )
}
