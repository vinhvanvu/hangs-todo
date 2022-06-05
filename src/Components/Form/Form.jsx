import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Form.css';

export default function Form({setInput, userInput, onAdd}) {
    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }
    return (
        <form className="input-container">
            <input value= {userInput} onChange={handleInput} type="text" className="input-form" placeholder='New Task'/>
            <button type='submit' onClick={onAdd} className="input-button">
                <FontAwesomeIcon icon={faPlus} className="plus-sign"/>
            </button>
        </form>
    )
}