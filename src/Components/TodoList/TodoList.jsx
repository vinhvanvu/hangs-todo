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
        {   checked: false,
            name: 'Readibility About page',
            id: 3
        },
        {   checked: true,
            name: 'Check color contrast',
            id: 4
        }
    ])

    const handleCheckEvent = (todoid) => {
        const result = [];

        for (let i = 0; i < items.length; i++) {
           if (items[i].id !== todoid) {
               result.push({
                   ...items[i]
               })       
           }
           else {
               result.push({
                    ...items[i],
                    checked: !items[i].checked
               })
           }
        }
        setItems(result)
    }
    console.log(items)
    const ListItems = items ? items.map((item) => <TodoListItem todoid={item.id} onClick={handleCheckEvent} name={item.name} checked={item.checked} key={item.id}></TodoListItem>) : null
    
    return (
        <div className='todo-list'>           
            {ListItems}
            <div className='button-container'>
                <NewTaskButton />
            </div>
        </div>
    )
}