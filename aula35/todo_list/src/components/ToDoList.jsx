import { useState } from 'react'
import './ToDoList.css'

function ToDoList() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      document.getElementById('add-button').click()
    }
  }

  const addOnList = () => {
    if (item.trim() !== '') {
      setItems([...items, item])
      setItem('')
    }
  }

  const removeFromList = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  return (
    <div>
      <div id="input-add">
        <input id="input" type="text" value={item} 
        onChange={(e) => setItem(e.target.value)}
        onKeyUp={handleEnter}/>
        <button id="add-button" onClick={addOnList}>Adicionar na lista</button>
      </div>
      <ul id="todo-list">
        {items.map((item, index) => (
          <li key={index}>
            <div>
              {item}
            </div>
            <button id="remove-button" onClick={() => removeFromList(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList