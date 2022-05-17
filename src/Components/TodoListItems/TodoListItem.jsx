import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.jsx';
import TodoListItemText from '../TodoListItemText/TodoListItemText.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './TodoListItem.css';

export default function TodoListItem() {
    const [Checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!Checked)
    }

    return (
        <div className='todo-list-item'>
            <div className='todo-list-item-right'>
                <Checkbox className='checkbox' onClick={handleChecked} checked={Checked}/>
                <TodoListItemText onClick={handleChecked}
                    style={{
                        textDecoration: Checked ? 'line-through' : 'none'
                    }}
                />
            </div>
            <FontAwesomeIcon className='trashcan' icon={faTrashCan} 
                style={{
                    visibility: Checked ? 'visible' : 'hidden'
                }}
            />
        </div>
    )
}