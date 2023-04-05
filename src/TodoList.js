import React from 'react';

import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: "Begin reading assignment",
    },
    {
      id: 2,
      title: "Begin coding assignment",
    },
    {
      id: 3,
      title: "Turn in assignment",
    }
  ];

const TodoList = () => {
    return(
        <div>
            <ul>
                {todoList.map(function(item){
                 return(
                      < TodoListItem key={item.id} todo={item} />
                    )
                })}              
            </ul>
        </div>
    )
}

export default TodoList;