import { useState } from 'react';
import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import TodoListItem from '../TodoListItems/TodoListItem.jsx';
import Form from '../Form/Form.jsx';
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

    const [userInput, setInput] = useState('')

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
    
    const handleDelete = (todoid) => {
        const deleteResult = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].id !== todoid) {
                deleteResult.push({
                    ...items[i]
                })
            }
        }
        setItems(deleteResult)
    }

    const ListItems = items ? items.map((item) => <TodoListItem todoid={item.id} onDelete={handleDelete} onCheck={handleCheckEvent} name={item.name} checked={item.checked} key={item.id}></TodoListItem>) : null
    
    return (
        <div className='todo-list'>           
            {ListItems}
            <div className='button-container'>
                <Form setInput={setInput}/>
                <NewTaskButton/>
            </div>
        </div>
    )
}