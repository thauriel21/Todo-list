import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';


function App() {
const defaultState =[
  {label:"comprar mantequilla"},
  {label:"comprar pan"},
  {label:"pagar la luz"}
]

const [items, setItems] = useState(defaultState)

const list = items.map(
  item => {
return <Todo>{item.label}</Todo>
  }
)
  return (
    <div className="App">
      <h1>Mi lista de cosas por hacer</h1>

      <input type ="text"/>
      <button>Agregar</button>

      {list}
    </div>
  );
}

export default App;
