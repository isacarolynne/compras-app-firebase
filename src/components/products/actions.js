// Types of action
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_CUSTOMER_NAME = 'ADD_CUSTOMER_NAME'
export const CLEAR_ORDER = 'CLEAR_ORDER'

// Actions
export const addCustomerName = customerName => {
  return { type: ADD_CUSTOMER_NAME, payload: customerName }
}

export const addToCart = product => {
  return { type: ADD_TO_CART, payload: product }
}

export const removeFromCart = id => {
  return { type: REMOVE_FROM_CART, payload: id }
}

export const clearOrder = () => {
  return { type: CLEAR_ORDER }
}
