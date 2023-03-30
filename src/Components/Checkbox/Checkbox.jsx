import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './Checkbox.css';

export default function Checkbox(props) {
    return (
        <div onClick={(e) => props.onCheck(props.todoid)} className='checkbox'>
            {props.checked ? <FontAwesomeIcon icon={faCircleCheck} />:< FontAwesomeIcon icon={faCircle} />}
        </div>
    )
}