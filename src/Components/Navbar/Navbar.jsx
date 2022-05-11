
import Hamburger from '../Hamburger/Hamburger.jsx';
import Title from '../Title/Title.jsx';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Hamburger />
            <Title />
            <div></div>
        </div>
        )
}