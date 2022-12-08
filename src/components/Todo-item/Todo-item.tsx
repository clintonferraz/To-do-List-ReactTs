import './Todo-item.css'

type TodoItemProps = {
    item: TodoItemType;
}

export type TodoItemType = {
    isChecked: Boolean;
    text: string;
    date: string;
}

export function TodoItem(props: TodoItemProps){
    return(
        <div className="todo-item">
            <div>{props.item.text}</div>
            <div>{props.item.date}</div>
        </div>
    )
}