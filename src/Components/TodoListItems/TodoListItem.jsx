import Checkbox from '../Checkbox/Checkbox.jsx';
import TodoListItemText from '../TodoListItemText/TodoListItemText.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './TodoListItem.css';

export default function TodoListItem(props) {
    return (
        <div className='todo-list-item'>
            <div className='todo-list-item-right'>
                <Checkbox className='checkbox' onClick={props.onClick} checked={props.checked} todoid={props.todoid}/>
                <TodoListItemText onClick={props.onClick} name={props.name}
                    style={{
                        textDecoration: props.checked ? 'line-through' : 'none'
                    }}
                />
            </div>
            <FontAwesomeIcon className='trashcan' icon={faTrashCan} onClick={() => props.onChange(props.todoid)}
                style={{
                    visibility: props.checked ? 'visible' : 'hidden'
                }}
            />
        </div>
    )
}