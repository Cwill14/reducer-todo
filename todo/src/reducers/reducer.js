export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Do the laundry',
            completed: false,
            id: 3892980817
        },
        {
            item: 'Wash the car',
            completed: false,
            id: 3892986183
        }
    ]
}
export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}