import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import history from 'history/browser'

export const _history = history
export default createStore(reducer, applyMiddleware(thunk))