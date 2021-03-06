//applyMiddleWare allows you to actually apply middleware to the thunksMiddleware
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from '../reducers';
import ChatStore from './utilities/newChatStore'

// console.log('Inside store', typeof ChatStore)
// const ChatStore = (state = {messages: []}, action ) => {
//     return state
// }

// Construct Redux Store;
const rootReducer = combineReducers({...reducers, ChatStore});
// const rootReducer = combineReducers(ChatStore)
const logger = createLogger({collasped:true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
const store = createStore(rootReducer, middleware);

export default store; 