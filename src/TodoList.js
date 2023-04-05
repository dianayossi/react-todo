import React from 'react';

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
                    <li key={item.id}>
                    <span>{item.title}</span>
                    </li>
                    )
                })}              
            </ul>
        </div>
    )
}

export default TodoList;