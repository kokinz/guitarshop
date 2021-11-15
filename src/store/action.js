const ActionType = {
  CART_ADD: 'films/loadFilms',
  CART_DELETE: 'films/loadFilm',
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
