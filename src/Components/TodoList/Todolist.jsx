import NewTaskButton from "../NewTaskButton/NewTaskButton.jsx";
import './TodoList.css';
import Checkbox from '../Checkbox/Checkbox.jsx';

export default function TodoList() {
    return (
        <div className="ToDoListBody">
            <Checkbox />
            <NewTaskButton />
        </div>
    )
};