import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App()
{
  console.log('render app')
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
