import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import thunk from '../middleware/thunk.js';


const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
