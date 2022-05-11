import Hamburger from '../Hamburger/Hamburger.jsx';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Hamburger />
            <h1>Website todo</h1>
            <div></div>
        </div>
    )
}