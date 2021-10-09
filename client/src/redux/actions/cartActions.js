import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCartAction =  (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        id: data._id,
        title: data.title,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        qty
      }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }
  catch(error) {
    console.log(error)
  }
}

export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  })
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}
