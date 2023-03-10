import './Todo-item.css'

type TodoItemProps = {
    item: TodoItemType;
    index: number;
    deleteItem: (index: number) => void;
    isTheLast?: boolean;
}

export type TodoItemType = {
    isChecked: Boolean;
    text: string;
    time: string;
}

export function TodoItem(props: TodoItemProps){

    function handleCheckboxClick(checkbox: HTMLInputElement){
        const itemText = document.querySelectorAll('.item-text');
        if(checkbox.checked){
            (itemText[props.index] as HTMLElement).style.textDecoration = 'line-through';
        }else{
            (itemText[props.index] as HTMLElement).style.textDecoration = 'none';
        }
    }




    return(
        <div className={props.isTheLast ? 'todo-item  last' : 'todo-item' }>
            <div className='item-text'>
                <input type="checkbox" className='item-checkbox' onClick={e => handleCheckboxClick(e.target as HTMLInputElement)} />
                {props.item.text}
            </div>
            <div className='time-trash-container'>
                {props.item.time}
                <div className="trash-button" onClick={() => props.deleteItem(props.index)}><i className="fa-solid fa-trash-can"></i></div>
            </div>
        </div>
    )
}
