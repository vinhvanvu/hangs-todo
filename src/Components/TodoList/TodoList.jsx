import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import TodoListItem from '../TodoListItems/TodoListItem.jsx';
import './TodoList.css';

export default function TodoList() {
    
    return (
        <div className='todo-list'>
            <TodoListItem />   
            <div className='button-container'>
                <NewTaskButton />
            </div>
        </div>
    )
}