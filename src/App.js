import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';


function App() {
  const defaultState = [
    { label: "comprar mantequilla" },
    { label: "comprar pan" },
    { label: "pagar la luz" }
  ]

  const [items, setItems] = useState(defaultState)
  const [newItem, setNewItem] = useState('')



  const onClickFn = () => {
    setItems([...items, { label: newItem }])
  }

  const onChangeFn = (event) => {
    setNewItem(event.target.value)
  }
  const deleteFn = (label) => {
    setItems(items.filter(item => item.label !== label))
  }
const deleteNm = () => {
  setItems ([])
}

  const list = items.map(
    item => {
      return <Todo click={() => deleteFn(item.label)} >{item.label}</Todo>
    }
  )

  return (
    <div className="App">
      <h1>Mi lista de cosas por hacer</h1>

      <input
        type="text"
        value={newItem}
        onChange={onChangeFn}
      />
      <button onClick={onClickFn}>Agregar</button>


      {list}
      <h2>total de cosas en la lista: {items.length}</h2>

      <br />
      <button onClick={deleteNm}>eliminar Todo 🗑️</button>

    </div>
  );
}

export default App;
