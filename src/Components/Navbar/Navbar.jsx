import './Navbar.css';
import Hamburger from '../Hamburger/Hamburger.jsx';
import Tittle from '../tittle/tittle.jsx';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Hamburger />
            <Tittle />
            <div></div>
        </div>
        )
}