import { combineReducers } from "redux";
import {routerReducer} from 'react-router-redux'
import {opContent} from './content'
import { opData } from "./data";
import { changeHeader } from "./header";

export default combineReducers({content: opContent, datas: opData, header: changeHeader, routing: routerReducer})