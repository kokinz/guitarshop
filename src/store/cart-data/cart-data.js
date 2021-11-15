import {ActionType} from '../action.js';

import {guitars} from '../data.js';
///////////////////////

const initialState = {
  cart: guitars.slice(2, 4),
};

const cartDelete = (item, cart) => {
  const index = cart.findIndex((element) => element.id === item.id)

  if (index > -1) {
    return [...cart.slice(0, index), ...cart.slice(index + 1)];
  }

  return cart;
}

const cartData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CART_ADD:
      return {
        ...state,
        cart: [...state.cart, action.payload],
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
