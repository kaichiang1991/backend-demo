import { nanoid } from "nanoid"

const initState = [
    {group: '基礎選單', id: nanoid(), datas: [
        {id: nanoid(), title: '上傳', icon: 'upload', path: '/upload'},
        {id: nanoid(), title: '選單', icon: 'menu', path: '/menu'},
    ]},
    {group: '主選單', id: nanoid(), datas: [
        {id: nanoid(), title: '語系管理', icon: 'message', path: '/message'},
    ]}
]

export function opData(preState = initState, action){
    // console.log('opData', preState, action)
    return preState
}