const ActionType = {
  CART_ADD: 'cart/addItem',
  CART_DELETE: 'cart/deleteItem',
};

const cartAdd = (guitar) => ({
  type: ActionType.CART_ADD,
  payload: guitar,
});

const cartDelete = (guitar) => ({
  type: ActionType.CART_DELETE,
  payload: guitar,
});

export {ActionType, cartAdd, cartDelete};
