
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './NewTaskButton.css';

export default function NewTaskButton() {
    return (
        <div className='buttonContainer'>
            <button className='NewtaskButton'>
                <FontAwesomeIcon id='plusSign' icon={faPlus} />
                New Task
            </button>
        </div>
    )
};