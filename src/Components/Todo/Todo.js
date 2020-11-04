import React from 'react';
import './Todo.css';
import PropTypes from "prop-types";

const Todo = ({id, deleteTask,contacts }) => {
    const deleteItem = () => {
        deleteTask(id)
    }
    return (
        <ul>
             { 
             contacts.map((contact) => (
             <li key={contact.id}>
        <div>
            <p className="todo__text">{contact.name}: {contact.number}</p>

            <button onClick={deleteItem}>DELETE</button>
        </div>
        </li>
         ))
         }
        </ul>
    );
};

export default Todo;

Todo.propTypes ={
    deleteTask: PropTypes.func.isRequired,
};