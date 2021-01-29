import { createStore, applyMiddleware } from "redux";
import reducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory()
export default createStore(reducer, applyMiddleware(thunk, routerMiddleware(history)))