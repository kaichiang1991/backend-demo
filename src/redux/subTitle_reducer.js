const initState = {
    options: [
        {id: 'upload', icon: 'upload', title: '上傳', path: '/upload'},
        {id: 'select', icon: 'search', title: '選擇', path: '/select'}
    ],
    count: 0
}

export default function subTitleReducer(preState = initState, action){
    const {type, data} = action
    const {count} = preState

    switch (type) {
        case 'add':
            return {...preState, count: count+data}
    
        case 'sub':
            return {...preState, count: count-data}

        default:
            return preState;
    }
}