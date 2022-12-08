import { useState } from 'react'
import { TodoItem , TodoItemType} from '../components/Todo-item/Todo-item'
import './home.css'

function Home() {
  const [ itemsList, setItemsList] = useState<TodoItemType[]>([]);
  const [ item, setItem] = useState<TodoItemType>({} as TodoItemType);

  function newTodoItem(){
    const newItem = {
      text: 'Texto',
      date: 'date',
      isChecked: false,
    } as TodoItemType
    setItemsList(prevState => [ ...prevState, newItem]);
    console.log('itemsList');
  
  }



  return (
    <div className="Home">
      <div className='home-container'>
        <div className='container'>
          <input type="text" id='new-todo-input' ></input>
          <button className='btn-new-item' onClick={newTodoItem}>Adicionar</button>
        </div>
        {
          itemsList.map((item, index) => (
            <TodoItem key={index} item={item} />
            
          )) 
        }
       
      </div>
      
    </div>
  )
}

export default Home
