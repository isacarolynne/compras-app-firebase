import { createStore, applyMiddleware } from 'redux'
import cartItems from '../reducers/cartItems'
import { composeWithDevTools } from 'remote-redux-devtools';
import thunkMiddleware from 'redux-thunk'

export default store = createStore(cartItems, composeWithDevTools(applyMiddleware(thunkMiddleware))
)
