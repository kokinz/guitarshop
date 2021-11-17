import {ActionType} from '../action.js';

const initialState = {
  cart: [],
};

const cartDelete = (item, cart) => {
  const index = cart.findIndex((element) => element.id === item.id)

  if (index > -1) {
    return [...cart.slice(0, index), ...cart.slice(index + 1)];
  }

  return cart;
}

const cartAdd = (item, cart) => {
  const index = cart.findIndex((element) => element.id === item.id)

  if (index > -1) {
    return cart;
  }

  return [...cart, item];
}

const cartData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CART_ADD:
      return {
        ...state,
        cart: cartAdd(action.payload, state.cart),
      };
    case ActionType.CART_DELETE:
      return {
        ...state,
        cart: cartDelete(action.payload, state.cart),
      };
    default:
      return state;
  }
};

export {cartData};
