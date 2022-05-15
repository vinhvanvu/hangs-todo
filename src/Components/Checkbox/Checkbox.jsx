import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCab, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './Checkbox.css';

export default function Checkbox(props) {
    return (
        <div onClick={props.onClick} id='checkbox'>
            {props.checked ? <FontAwesomeIcon icon={faCircleCheck} />:< FontAwesomeIcon icon={faCircle} />}
        </div>
    )
}