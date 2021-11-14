import {ActionType} from '../action.js';

const initialState = {
  cart: [],
};

const cartAdd = (item, count, cart) => {
  if (count > 0) {
    return [...cart, {
      guitar: item,
      count,
    }];
  }

  return cart;
}

const cartDelete = (item, count, cart) => {
  const index = cart.findIndex((element) => element.guitar.id === item.id)

  if (index > -1) {
    return [...cart.slice(0, index), {
      guitar: it,
      count,
    }, ...cart.slice(index + 1)];
  }

  return cart;
}

const cartData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CART_ADD:
      return {
        ...state,
        cart: cartAdd(action.payload.guitar, action.payload.count, state.cart),
      };
    case ActionType.CART_DELETE:
      return {
        ...state,
        cart: cartDelete(action.payload.guitar, action.payload.count, state.cart),
      };
    default:
      return state;
  }
};

export {cartData};
