import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { ActionTypes, CartState, initialState, Product, reducer } from "./ShoppingCartReducer";
import { API_URL } from "./API_URL";
import axios from "axios";

type ShoppingPageContextType = CartState & {
    addProduct: (product: Product) => void
    removeProduct: (id: Product['id']) => void // galima paimti sitaip arba id: string / number. bet cia neprisirisam prie tipo. jei product tipe pakeisime id tipa, pasikeis ir cia savaime.
    clearCart: () => void
    updateQuantity: (id: Product['id'], quantity: number) => void
    categoryChanger: (category: string) => void
    applyDiscount: (DiscountCode: string) => void
}

const ShoppingPageContext = createContext<ShoppingPageContextType | undefined>(undefined)


type ShoppingPageContextProviderProps = {children: ReactNode}

export const ShoppingPageContextProvider: React.FC<ShoppingPageContextProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState) // cia importuojam is reducer komponento reducer ir initialState
    const {cart, productsData, selectedCategory, discount, discountCodes} = state

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const { data } = await axios(`${API_URL}/products`)
                dispatch({type: ActionTypes.SET_PRODUCTS_DATA, payload: data})
            } catch (error){
                console.error('error fetching products,', error)
            }
        }
        fetchProducts()
    }, [])



const addProduct = (product: Product) => dispatch({type: ActionTypes.ADD_ITEM, payload: product})
const removeProduct = (id: Product['id']) => dispatch({type: ActionTypes.REMOVE_ITEM, payload: id})
const clearCart = () => dispatch({type: ActionTypes.CLEAR_CART})
const updateQuantity = (id: Product['id'], quantity: number) => dispatch({type: ActionTypes.UPDATE_QUANTITY, payload: {id, quantity}})

const applyDiscount = (discountCode: string) => dispatch({type: ActionTypes.APPLY_DISCOUNT, payload: discountCode})

const categoryChanger = (category: string) => dispatch({type: ActionTypes.SET_CATEGORY, payload: category}) 

const ctxValue: ShoppingPageContextType = {
    cart: cart,
    productsData: productsData,
    selectedCategory: selectedCategory,
    discountCodes,
    discount,
    addProduct,
    removeProduct,
    clearCart,
    updateQuantity,
    categoryChanger,
    applyDiscount
}

    return (
        <ShoppingPageContext.Provider value={ctxValue}>
            {children}
        </ShoppingPageContext.Provider>
    )
}


export const useCart = () => {
    const ctx = useContext(ShoppingPageContext)

    if (!ctx) {
        throw new Error('useCart cannot be used outside the ShoppingPageContextProvider')
    }
    return ctx
}