type State = {
    joke: string
    error: string
    loading: boolean
}

export const enum ActionTypes {
    FETCH_JOKE = 'fetchJoke',
    SUCCESS = 'error',
    FAIL = 'loading'
}

type Action = 
|{type: ActionTypes.FETCH_JOKE}
|{type: ActionTypes.SUCCESS, payload: string}
|{type: ActionTypes.FAIL}



export const initialState: State = {
    joke: '',
    error: '',
    loading: false
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.FETCH_JOKE :
            return {
                ...state,
                loading: true,
                error: ''
            }
        case ActionTypes.SUCCESS :
            return {
                ...state,
                loading: false,
                joke: action.payload
            }
        case ActionTypes.FAIL :
            return {
                ...state,
                loading: false,
                error: 'Something went wrong...'
            }

        default:
            return {
                state
        }
    }
}