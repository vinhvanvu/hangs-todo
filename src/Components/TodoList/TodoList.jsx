import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
import { useState } from 'react';
import './TodoList.css';

export default function TodoList() {
    const [Checked, setChecked] = useState(false);
    
    const handleChecked = () => {
        
        setChecked(!Checked)
    }
    
    return (
        <div>
            <NewTaskButton />
            <Checkbox onClick={handleChecked} checked={Checked}/>
        </div>
    )
}