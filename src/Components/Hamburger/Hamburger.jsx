import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Hamburger.css';

export default function Hamburger() {
    return (<FontAwesomeIcon id='hamburger' icon={faBars} />)
}