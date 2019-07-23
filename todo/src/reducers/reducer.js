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

export const ADD_TODO = 'ADD_TODO';

export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
    }
}