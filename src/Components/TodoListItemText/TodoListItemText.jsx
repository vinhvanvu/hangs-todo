import './TodoListItemText.css';

export default function TodoListItemText(props) {
    return (
        <h1 className='todo-list-item-text' onClick={props.onClick} style={props.style}> 
            Styleguide creation
        </h1>
    )
}