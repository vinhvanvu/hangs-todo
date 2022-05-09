import './NewTaskButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default NewTaskButton() {
    return (<Button>
                <FontAwesomeIcon icon={faPlus} />
                New Task
            </Button>)
};