import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

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
            <InputWithLabel todoTitle= {todoTitle} handleTitleChange= {handleTitleChange} autoFocus> Title:</InputWithLabel>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddToDoForm;