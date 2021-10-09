import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers'

const reducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
})

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
