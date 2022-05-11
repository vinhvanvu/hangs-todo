import './Checkbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



export default function Checkbox() {
    return (
    <ul className='checkboxframe'>
        <div className='tasks'>
            <div className='bullets'>
                <li><FontAwesomeIcon id='circle' icon={faCircle} /></li>
                <h1 className='task'>Styleguide creation</h1>
            </div>
            <FontAwesomeIcon id='trashcan' icon={faTrashCan} />
        </div>

        <div className='tasks'>
            <div className='bullets'>
                <li><FontAwesomeIcon id='circle' icon={faCircle} /></li>
                <h1 className='task'>Send wireframes</h1>
            </div>
            <FontAwesomeIcon id='trashcan' icon={faTrashCan} />
        </div>
        
        <div className='tasks'>
            <div className='bullets'>
                <li><FontAwesomeIcon id='circle' icon={faCircle} /></li>
                <h1 className='task'>Readibilty About the page</h1>
            </div>
            <FontAwesomeIcon id='trashcan' icon={faTrashCan} />
        </div>
       
        <div className='tasks'>
            <div className='bullets'>
                <li><FontAwesomeIcon id='circle' icon={faCircle} /></li>
                <h1 className='task'>Check color contrast</h1>
            </div>
            <FontAwesomeIcon id='trashcan' icon={faTrashCan} />
        </div>
    </ul>
    )
}