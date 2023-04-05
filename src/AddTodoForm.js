import React from 'react';

const AddToDoForm = () => {
    return(
        <form>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle"></input> 
            <button>Add</button>
        </form>
    )
}

export default AddToDoForm;