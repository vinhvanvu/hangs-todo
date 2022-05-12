import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './NewTaskButton.css';

export default function NewTaskButton() {
    return (
        <button className='new-task-button'>
            <FontAwesomeIcon id='plus-sign' icon={faPlus} />
            New Task
        </button>
    )
}