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

function App(){
  return(
    <div>
      <h1>Todo List</h1>
      <hr></hr>
      <ul>
        {todoList.map(function(item){
          return(
            <li key={item.id}>
                {/* <span>{item.id}</span> */}
                <span>{item.title}</span>
            </li>
          )
        })}

        
      </ul>
    </div>
  );
}

export default App;