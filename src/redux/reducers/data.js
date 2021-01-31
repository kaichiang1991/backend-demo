import { nanoid } from "nanoid"

const initState = [
    {group: '基礎選單', id: nanoid(), datas: [
        {id: nanoid(), title: '首頁', icon: 'menu', path: '/home'},
    ]},
    {group: '主選單', id: nanoid(), datas: [
        {id: nanoid(), title: '語系管理', icon: 'document', path: '/message'},
        {id: nanoid(), title: '遊戲類型管理', icon: 'star-off', path: '/type'},
        {id: nanoid(), title: '遊戲規格管理', icon: 'star-on', path: '/format'},
        {id: nanoid(), title: '遊戲管理', icon: 'document', path: '/game'},
        {id: nanoid(), title: '遊戲設定', icon: 'setting', path: '/setting'},
        {id: nanoid(), title: '聯絡我們', icon: 'message', path: '/contact'},
    ]}
]

export function opData(preState = initState, action){
    // console.log('opData', preState, action)
    return preState
}