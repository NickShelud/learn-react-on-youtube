let initialReducer = {
    friends: [
        {name: 'Nastya', id: 1},
        {name: 'Ron', id: 2},
        {name: 'Alex', id: 3},
    ]
}

const sidebarReducer = (state = initialReducer, action) => {

    return state;
}

export default sidebarReducer;