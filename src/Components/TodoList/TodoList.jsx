import Checkbox from '../Checkbox/Checkbox.jsx';
import TodoListItem from '../TodoListItem/TodoListItem.jsx';
import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './TodoList.css';



export default function TodoList() {
    const [Checked, setChecked] = useState(false);    
    const handleChecked = () => {    
        setChecked(!Checked)
    }    
    return (
        <div className='todo-list'>
            <div className='todo-list-upper'>
                <div className='todo-list-right'>
                    <Checkbox onClick={handleChecked} checked={Checked}/>
                    <TodoListItem className='todo-list-item' onClick={handleChecked}
                        style={{
                            textDecoration: Checked ? 'line-through' : 'none'
                        }}
                    />
                </div>
                <FontAwesomeIcon className='trashcan' icon={faTrashCan} />
            </div>
            <div className='todo-list-bottom'>
                <NewTaskButton />
            </div>
        </div>
    )
}