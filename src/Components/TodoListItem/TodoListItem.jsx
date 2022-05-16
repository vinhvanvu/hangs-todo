import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './TodoListItem.css';

export default function TodoListItem(props) {
    return (
        <h1 className='todo-list-item' onClick={props.onClick} style={props.style}>
            Styleguide creation    
        </h1>
    )
}