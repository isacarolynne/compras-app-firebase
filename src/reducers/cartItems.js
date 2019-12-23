import { ADD_TO_CART, REMOVE_FROM_CART, ADD_CUSTOMER_NAME, CLEAR_ORDER } from "../components/products/actions"

const initialState = {
  order: {
    items: [],
    customerName: ''
  },
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        order: {
          ...state.order,
          items: [
            ...state.order.items,
            action.payload
          ]
        }
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        order: {
          ...state.order,
          items: state.order.items.filter(product => product.id !== action.payload)
        }
      }
    }

    case ADD_CUSTOMER_NAME: {
      return {
        ...state,
        order: {
          ...state.order,
          customerName: action.payload
        }
      }
    }

    case CLEAR_ORDER: {
      return {
        customerName: '',
        order: {
          items: [],
          customerName: ''
        },
      }
    }
  }

  return state
}

export default cartItems
