import React, {useEffect, useRef} from 'react';

const InputWithLabel = ({
    todoTitle,
    handleTitleChange,
    children,
    autoFocus,
}) => {
    const inputRef = useRef();

    useEffect (() => {
        inputRef.current.focus();

    });

    return(
        <>
        <label htmlFor="todoTitle"> {children}</label>
        <input id="todoTitle" name="title" type ='text' value={todoTitle} onChange={handleTitleChange} ref = {inputRef} /> 
        </>
    )
}

export default InputWithLabel;