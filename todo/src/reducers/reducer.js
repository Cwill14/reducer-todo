export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            important: false,
            id: 3892987589
        },
        {
            item: 'Do the laundry',
            completed: false,
            important: false,
            id: 3892980817
        },
        {
            item: 'Wash the car',
            completed: false,
            important: false,
            id: 3892986183
        }
    ]
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';


export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        case ADD_TODO:
            const newTodo = {
                item: action.payload,
                completed: false,
                important: false,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(action.payload === todo.id){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } 
                    return todo;
                })
            }
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return !todo.completed;
                })
            }
        case TOGGLE_IMPORTANT:
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if(action.payload === todo.id){
                            return {
                                ...todo,
                                important: !todo.important
                            }
                        } 
                        return todo;
                    })
                }
    }
}