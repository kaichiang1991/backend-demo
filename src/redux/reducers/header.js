import { ADD, ADD_FROM_ROOT, SET, TO_HOME } from "../constant"

const initState = ''
export function changeHeader(preState=initState, action){
    const {type, data} = action
    switch (type) {
        case ADD_FROM_ROOT:
            return [initState, ...data].join('/')
        case ADD:
            return preState + data
        case SET:
            return ' / ' + data
        case TO_HOME:
            return initState
        default:
            return preState
    }
}

const initSubTitle = {
    
}
export function changeSubTitle(preState=initSubTitle, action){

}