import React from 'react';
import { RiDeleteBin7Line, RiPencilFill } from 'react-icons/ri';
import { GiConfirmed } from 'react-icons/gi';
import { BiCheckCircle, BiCircle } from 'react-icons/bi';

import './Todo.css';

const Todo = ({ todos, handleComplete, handleEdit, handleDelete, handleUpdate, setEditInput, todoBeforeEdit, editInput,
    handleForFieldClick }) => {
    const { todo, isEditMode, isCompleted } = todos;

    return (
        <div className='todo-row' >
            <div className={isCompleted ? 'task complete' : 'task'}>
                <div className='icons'>
                    {!isCompleted ? <BiCircle onClick={handleComplete}>Complete</BiCircle> : <BiCheckCircle>Complete</BiCheckCircle>}
                </div>
                {todos.isEditMode ? < input type="text" name='editValue' value={editInput.editValue}
                    className="edit-input" onChange={setEditInput} onClick={handleForFieldClick} onFocus={handleForFieldClick} autoFocus /> : todo}
            </div>
            <div className='icons'>
                {isCompleted ? '' : !isEditMode ? <RiPencilFill onClick={handleEdit} className='edit-icon'>Edit</RiPencilFill> :
                    <GiConfirmed onClick={handleUpdate}>Save</GiConfirmed>}
                <RiDeleteBin7Line onClick={handleDelete} className='delete-icon'>Delete</RiDeleteBin7Line>
            </div>
        </div>
    );
};

export default Todo;