import { useState } from 'react'
import { TodoItem , TodoItemProps} from '../components/Todo-item/Todo-item'
import './home.css'

function Home() {
  const [ itemsList, setItemsList] = useState<TodoItemProps[]>([]);
  const [ item, setItem] = useState<TodoItemProps>({} as TodoItemProps);

  function newTodoItem(){
    
  
  }



  return (
    <div className="Home">
      <div className='home-container'>
        <div className='container'>
          <input type="text" id='new-todo-input' ></input>
          <button className='btn-new-item' onClick={newTodoItem}>Adicionar</button>
        </div>
        {/* <TodoItem /> */}
      </div>
      
    </div>
  )
}

export default Home
