import { useState } from 'react'
import { TodoItem , TodoItemType} from '../components/Todo-item/Todo-item'
import './home.css'

function Home() {
  const [ itemsList, setItemsList] = useState<TodoItemType[]>([]);
  const [ item, setItem] = useState<TodoItemType>({} as TodoItemType);

  function handleClick(){
    const myinput = document.querySelector('#new-todo-input') as HTMLInputElement;
    if (myinput.value != '') newTodoItem(myinput.value);
    myinput.value = '';
  }

  function newTodoItem(text: string){
    const newItem = {
      text: text,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        day: '2-digit',
        month: '2-digit'
      }),
      isChecked: false,
    }
    setItemsList(prevState => [ ...prevState, newItem]);
  }

  function handleDeleteItem(index: number){
    let newList = [ ...itemsList];
    newList.splice(index,1);
    setItemsList(newList);
  }

  return (
    <div className="Home">
      <div className='home-container'>
        <div className='input-container'>
          <input type="text" id='new-todo-input' ></input>
          <button className='btn-new-item' onClick={handleClick}>Adicionar</button>
        </div>
        <div className="items-container">
          { 
            itemsList.map((item, index) => (
              <TodoItem 
                key={index} 
                index={index} 
                deleteItem={(index: number) => handleDeleteItem(index)}
                item={item} 
                isTheLast={index == itemsList.length - 1} 
              />
            ))  
          }
        </div>
      </div>
    </div>
  )
}

export default Home
