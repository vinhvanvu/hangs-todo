import './Navbar.css';
import Hamburger from '../Hamburger/Hamburger.jsx';
import Title from '../title/title.jsx';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Hamburger />
            <Title />
            <div></div>
        </div>
        )
}