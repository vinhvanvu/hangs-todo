import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewTaskButton.css';

export default function NewTaskButton(props) {
    return (
        <button className='new-task-button' onClick={props.onClick}>
            New Task
        </button>
    
    )
}