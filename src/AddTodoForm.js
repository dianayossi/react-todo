import React, {useState} from 'react';

const AddToDoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();

        onAddTodo(
        {
            title: todoTitle,
            id: Date.now(),
        }
        );
        setTodoTitle('');
    };


    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input> 
            <button type="submit">Add</button>
        </form>
    )
}

export default AddToDoForm;