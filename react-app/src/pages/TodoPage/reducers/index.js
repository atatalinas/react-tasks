import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    todos: [],
    editInputValue: ''
};

const todoPageReducer = handleActions({
    [actions.CREATE_TODO]: (state, { payload }) => {
        const todosCopy = [...state.todos];

        todosCopy.push(payload);
        todosCopy.sort((currentTodo, nextTodo) => currentTodo.isCompleted >= nextTodo.isCompleted ? 1 : -1);

        return {
            ...state,
            todos: todosCopy
        }
    },
    [actions.DELETE_TODO]: (state, { payload }) => {
        const todosCopy = [...payload];

        return {
            ...state,
            todos: todosCopy
        }
    },
    [actions.COMPLETE_TODO]: (state, { payload }) => {
        const todosCopy = [...payload];

        todosCopy.sort((currentTodo, nextTodo) => currentTodo.isCompleted >= nextTodo.isCompleted ? 1 : -1);

        return {
            ...state,
            todos: todosCopy
        }
    },
    [actions.UPDATE_TODO]: (state, { payload }) => {
        const todosCopy = [...payload];

        return {
            ...state,
            todos: todosCopy
        }
    },
    [actions.UPDATE_EDIT_INPUT_VALUE]: (state, { payload }) => {
        return {
            ...state,
            editInputValue: payload
        }
    }
}, defaultState);

export default todoPageReducer;