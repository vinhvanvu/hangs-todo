import './TodoListItemText.css';

export default function TodoListItemText(props) {
    return (
        <h1 className='todo-list-item-text' onClick={props.onClick} style={props.style}> 
            {props.name}
        </h1>
    )
}