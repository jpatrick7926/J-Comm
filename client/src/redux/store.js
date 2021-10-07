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

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
