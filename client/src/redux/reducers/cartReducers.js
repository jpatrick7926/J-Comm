import * as actionTypes from '../constants/cartConstants'

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:

      const existingItem = state.cartItems.find((itemInCartArray) => action.payload.id === itemInCartArray.id )
      if(existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((itemInCartArray) => itemInCartArray.id === existingItem.id ? action.payload : itemInCartArray)
        }
      } else {
        return {
          ...state,
          cartItems: [ ...state.cartItems, action.payload]
        }
      }

    case actionTypes.ADD_TO_CART_FAIL:
      console.log('oh I failed ima sucker')
      return { ...state }
    default:
      return state
  }
}
