import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addProduct: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload.id)
      if (!cartItem) {  // если такого товара в корзине нет, то добавляем
        state.cart.push({...action.payload, count: 1})
      } else {  // если товар есть, то увеличиваем count на 1
        cartItem.count++
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },

    plusItem: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload)
      cartItem.count++
    },
    minusItem: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload)
      cartItem.count--
    },
    changeCartItemCount: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload.id)
      cartItem.count = action.payload.value
    },

    clearCart: (state, action) => {
      console.log('clear')
      state.cart = []
    },
  }
})

export const {addProduct, removeProduct, plusItem, minusItem, changeCartItemCount, clearCart} = cartSlice.actions

export default cartSlice.reducer
