import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCartAction =  (id, qty) => async (dispatch) => {
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
  }
  catch(error) {
    console.log(error)
  }
}
