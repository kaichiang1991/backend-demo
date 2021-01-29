import { ADD, ADD_FROM_ROOT, SET } from "../constant"

const initState = '首頁'
export function changeHeader(preState=initState, action){
    const {type, data} = action
    console.log('data', data)
    switch (type) {
        case ADD_FROM_ROOT:
            return [initState, ...data].join('/')
        case ADD:
            return preState + data
        case SET:
            return data            
        default:
            return preState
    }
}