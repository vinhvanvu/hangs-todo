import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import TodoListItem from '../TodoListItems/TodoListItem.jsx';
import './TodoList.css';

export default function TodoList() {
    return (
        <div className='todo-list'>
            <TodoListItem name='Styleguide creation' checked={true}/>   
            <TodoListItem name='Send wireframes' checked={false} />   
            <TodoListItem name='Readibility About page' checked={true}/>   
            <TodoListItem name='Check color contrast' checked={false}/>   
            <div className='button-container'>
                <NewTaskButton />
            </div>
        </div>
    )
}