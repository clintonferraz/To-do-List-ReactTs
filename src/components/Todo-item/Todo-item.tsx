import './Todo-item.css'
export type TodoItemProps = {
    isChecked: Boolean;
    text: string;
    date: string;
}

export function TodoItem(props: TodoItemProps){
    return(
        <div className="todo-item">
            <div>{props.text}</div>
            <div>{props.date}</div>
        </div>
    )
}