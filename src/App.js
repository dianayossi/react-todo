import React, {useEffect, useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []);

  useEffect(() => {
    localStorage.setItem('savedToDoList', JSON.stringify(todoList))
   }, [todoList])

  return [todoList, setTodoList];

}


function App(){

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo= (newTodo) => {
    setTodoList([...todoList, {newTodo}])
  };

  return(
    <div>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo = { addTodo } />

      <TodoList todoList={todoList}/>

    </div>
  );
}

export default App;