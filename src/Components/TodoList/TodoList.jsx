import { useState } from 'react';
import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import TodoListItem from '../TodoListItems/TodoListItem.jsx';
import './TodoList.css';

export default function TodoList() {
    const [items, setItems] = useState([
        {   checked: true,
            name: 'Styleguide creation',
            id: 1
        },
        {   checked: false,
            name: 'Send wireframes',
            id: 2
        },
        {   checked: true,
            name: 'Readibility About page',
            id: 3
        },
        {   checked: true,
            name: 'Check color contrast',
            id: 4
        }
    ])
    console.log(items)
        const ListItems = items.map((item) => <TodoListItem name={item.name} checked={item.checked}></TodoListItem>)
    
    return (
        <div className='todo-list'>
            
            {ListItems}
            {/* <TodoListItem name='Styleguide creation' checked={true}/>   
            <TodoListItem name='Send wireframes' checked={false} />   
            <TodoListItem name='Readibility About page' checked={true}/>   
            <TodoListItem name='Check color contrast' checked={false}/>    */}
            <div className='button-container'>
                <NewTaskButton />
            </div>
        </div>
    )
}