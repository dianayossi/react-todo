import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => {
    return(
        <div>
            <ul>
                {todoList.map(function(item){
                 return(
                      < TodoListItem key={item.newTodo.id} todo={item.newTodo} />
                    )
                })}              
            </ul>
        </div>
    )
}

export default TodoList;