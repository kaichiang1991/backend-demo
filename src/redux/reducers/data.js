import { nanoid } from "nanoid"

const initState = [
    {id: nanoid(), title: '上傳', icon: 'upload'},
    {id: nanoid(), title: '選單', icon: 'menu'},
]
export function opData(preState = initState, action){
    console.log('opData', preState, action)
    return preState
}