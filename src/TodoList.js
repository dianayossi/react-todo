import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList, onRemoveTodo}) => {
    return(
        <div>
            <ul>
                {todoList.map((todo) => (
                      < TodoListItem key={todo.id} id = {todo.id} title = {todo.title} onRemoveTodo ={onRemoveTodo} />
                    ))}       
            </ul>
        </div>
    )
}

export default TodoList;