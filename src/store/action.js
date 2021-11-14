const ActionType = {
  CART_ADD: 'films/loadFilms',
  CART_DELETE: 'films/loadFilm',
};

const cartAdd = (cart) => ({
  type: ActionType.CART_ADD,
  payload: cart,
});

const cartDelete = (cart) => ({
  type: ActionType.GET_FILMS_BY_GENRE,
  payload: cart,
});

export {ActionType, cartAdd, cartDelete};
