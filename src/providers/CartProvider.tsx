import React, { createContext, useEffect, useReducer } from 'react'
import { IProductDTO } from '../types/dto'
import { STORAGE_KEY, getIntialState, persistState } from '../utils/storage'

export interface CartItem extends IProductDTO {
  quantity: number
}

type CartState = {
  cartList: CartItem[]
  totalPrice: number
}

enum CartTypeEnum {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
}

type CartAction = {
  type: CartTypeEnum
  payload: {
    product: CartItem
    quantity?: number
  }
}

const defaultState: CartState = {
  cartList: [],
  totalPrice: 0,
}

export const initialState: CartState = getIntialState(STORAGE_KEY.APP_KEY) ?? defaultState

export const CartContext = createContext<{
  cartState: CartState
  addCartItem: (product: CartItem, quantity?: number) => void
  updateCartItem: (product: CartItem, quantity: number) => void
  removeCartItem: (product: CartItem) => void
}>({
  cartState: initialState,
  addCartItem: () => {},
  updateCartItem: () => {},
  removeCartItem: () => {},
})

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartTypeEnum.ADD_CART_ITEM: {
      const existingProduct = state.cartList.find((item) => item.id === action.payload.product.id)
      if (existingProduct) {
        const updatedCartItems = state.cartList.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.product.quantity,
            }
          }
          return item
        })

        return {
          ...state,
          cartList: updatedCartItems,
          totalPrice: state.totalPrice + action.payload.product.quantity * action.payload.product.price,
        }
      } else {
        const updatedCartItems = [...state.cartList, action.payload.product]
        return {
          ...state,
          cartList: updatedCartItems,
          totalPrice: state.totalPrice + action.payload.product.quantity * action.payload.product.price,
        }
      }
    }

    case CartTypeEnum.UPDATE_CART_ITEM: {
      const updatedCartItems = state.cartList.map((item) => {
        const q = action.payload.quantity ? action.payload.quantity : 0
        if (item.id === action.payload.product.id) {
          return {
            ...item,
            quantity: q,
          }
        }
        return item
      })

      const updatedTotalPrice = updatedCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)

      return {
        ...state,
        cartList: updatedCartItems,
        totalPrice: updatedTotalPrice,
      }
    }

    case CartTypeEnum.REMOVE_CART_ITEM: {
      const updatedCartItems = state.cartList.filter((item) => item.id !== action.payload.product.id)
      const updatedTotalPrice = updatedCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
      return {
        ...state,
        cartList: updatedCartItems,
        totalPrice: updatedTotalPrice,
      }
    }
    default:
      return state
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  const addCartItem = (product: CartItem, quantity?: number) =>
    dispatch({ type: CartTypeEnum.ADD_CART_ITEM, payload: { product, quantity } })

  const updateCartItem = (product: CartItem, quantity: number) =>
    dispatch({ type: CartTypeEnum.UPDATE_CART_ITEM, payload: { product, quantity } })

  const removeCartItem = (product: CartItem) => dispatch({ type: CartTypeEnum.REMOVE_CART_ITEM, payload: { product } })

  useEffect(() => persistState(STORAGE_KEY.APP_KEY, cartState), [cartState])

  return (
    <CartContext.Provider value={{ cartState, addCartItem, updateCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  )
}
