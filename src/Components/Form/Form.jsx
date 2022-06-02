import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Form.css';

export default function Form({setInput}) {
    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }
    return (
        <form>
            <input onChange={handleInput} type="text" placeholder='New Task'/>
            <button type='submit'>
                <FontAwesomeIcon id='plus-sign' icon={faPlus}/>
            </button>
        </form>
    )
}