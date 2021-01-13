import { createAction } from 'redux-actions';

export const CREATE_TODO = createAction('CREATE_TODO');
export const DELETE_TODO = createAction('DELETE_TODO');
export const COMPLETE_TODO = createAction('COMPLETE_TODO');
export const UPDATE_TODO = createAction('UPDATE_TODO');
export const UPDATE_EDIT_INPUT_VALUE = createAction('UPDATE_EDIT_INPUT_VALUE');