import './NewTaskButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function NewTaskButton() {
    return (
        <button>
            <FontAwesomeIcon id='plusSign' icon={faPlus} />
            New Task
        </button>
    )
};