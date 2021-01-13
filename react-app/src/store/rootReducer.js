import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoPage from '../pages/TodoPage/reducers';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['todoPage'],
    transforms: []
};

const rootReducer = combineReducers({ todoPage });

export default persistReducer(persistConfig, rootReducer);