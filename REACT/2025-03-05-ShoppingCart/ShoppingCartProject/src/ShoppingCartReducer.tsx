type State = {
    category: string
    name: string
    price: number
    imageUrl: string
}

type Action = 
|{type: ActionTypes.ADD_ITEM}
|{type: ActionTypes.REMOVE_ITEM, payload: number}
|{type: ActionTypes.UPDATE_QUANTITY}
|{type: ActionTypes.CLEAR_CART}

export enum ActionTypes {
    ADD_ITEM = 'addItem',
    REMOVE_ITEM = 'removeItem',
    UPDATE_QUANTITY = 'updateQuantity',
    CLEAR_CART = 'clearCart'
}

export const initialState = {
    category: '',
    name: '',
    price: 0,
    imageUrl: ''
}

export const reducer = (state: State, action: Action) => {
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            return {
                ...state
            }
        case ActionTypes.REMOVE_ITEM:
            return {
                ...state
            }
        case ActionTypes.CLEAR_CART:
            return {
                ...state
            }
        case ActionTypes.UPDATE_QUANTITY:
            return {
                ...state
            }
        default:
            return {
                state
            }
    }
}