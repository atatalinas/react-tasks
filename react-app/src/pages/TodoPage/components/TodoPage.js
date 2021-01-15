import React from 'react';

import Todo from '../../../commonComponents/Todo/Todo';
import './TodoPage.css';

const FormPage = ({ formValues, setFormValues, todoList, handleSubmit, handleTodoDelete, handleTodoComplete, handleTodoEdit,
    handleTodoUpdate, setEditInput }) => {
    const { todo } = formValues;

    return (
        <div className='todo-app'>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input type="text" name='todo' value={todo} className='todo-input' onChange={setFormValues} />
                <button type='submit' className='todo-button' disabled={todo.length === 0}>Add</button>
            </form>
            <div>
                {todoList.sort((currentTodo, nextTodo) => currentTodo.isCompleted >= nextTodo.isCompleted ? 1 : -1),
                    todoList.map((todo, index) => {
                        return <div key={index} >
                            <Todo
                                todos={todo}
                                handleDelete={() => handleTodoDelete(index)}
                                handleEdit={() => handleTodoEdit(index)}
                                handleComplete={() => handleTodoComplete(index)}
                                handleUpdate={() => handleTodoUpdate(index)}
                                setEditInput={setEditInput}
                            />
                        </div>
                    })}
            </div>
        </div>
    )
}

export default React.memo(FormPage);