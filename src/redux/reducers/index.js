import { combineReducers } from "redux";
import {routerReducer} from 'react-router-redux'
import {opContent} from './content'
import { opData } from "./data";

export default combineReducers({content: opContent, datas: opData, router: routerReducer})