import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from  './middleware/logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const configureStore =()=>{
    return createStore(rootReducer,composeWithDevTools(middlewareEnhancer));
}

export default configureStore;