export type Product = {
    id: number
    name: string
    price: number
    imageUrl: string
    category: string
}

export type CartProduct = Product & {
    quantity: number
}

export type CartState = {
    productsData: Product[]
    cart: CartProduct[]
    selectedCategory: string | null
}

type Action = 
|{type: ActionTypes.ADD_ITEM, payload: Product }
|{type: ActionTypes.REMOVE_ITEM, payload: Product['id']}
|{type: ActionTypes.UPDATE_QUANTITY, payload: {id: Product['id'], quantity: number}}
|{type: ActionTypes.CLEAR_CART}
|{type: ActionTypes.SET_PRODUCTS_DATA, payload: Product[] }
|{type: ActionTypes.SET_CATEGORY, payload: string | null }

export enum ActionTypes {
    ADD_ITEM = 'addItem',
    REMOVE_ITEM = 'removeItem',
    UPDATE_QUANTITY = 'updateQuantity',
    CLEAR_CART = 'clearCart',
    SET_PRODUCTS_DATA = 'setProductsData',
    SET_CATEGORY = 'setCategory'
}

export const initialState: CartState = {
    cart: [],
    productsData: [],
    selectedCategory: ''
}

export const reducer = (state: CartState, action: Action) => {

    switch (action.type){
        case ActionTypes.ADD_ITEM: {
            
            const { cart } = state
            const newProduct = action.payload
            const { id } = newProduct
            const existingItem = cart.find(item => item.id === id)
            if (existingItem) {
                const updatedCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item) 
                console.log(updatedCart)
            return {
                ...state,
                cart: updatedCart
            }
        } else {
            const updatedProduct = {...newProduct, quantity: 1}
            const updatedCart = [...cart, updatedProduct]
            return {
                ...state,
                cart: updatedCart
            }
        }
        }

        case ActionTypes.REMOVE_ITEM: {

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case ActionTypes.CLEAR_CART: {

            return {
                ...state,
                cart: []
            }
        }

        case ActionTypes.UPDATE_QUANTITY:{

            // const updatedCart = [...state.cart] // jei modifikuoja masyva, tada reikia kopijos originalaus masyvo
            const quantity = action.payload.quantity
            // const { id, quantity } = action.payload
            const updatedCart= state.cart.map(item => {
                if (item.id === action.payload.id){
                    return {
                        ...item, // returninam ta pati item (kopija), tik pakeiciam quantity
                        quantity: quantity
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                cart: updatedCart
            }
        }
        case ActionTypes.SET_PRODUCTS_DATA: {
            return {
                ...state,
                productsData: action.payload
            }
        }
        case ActionTypes.SET_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload

            }
        }
        default:
            return state
    }
}