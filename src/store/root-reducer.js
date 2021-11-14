import {combineReducers} from 'redux';
import {guitarsData} from './guitars-data/guitars-data.js';
import {cartData} from './cart-data/cart-data.js';

const NameSpace = {
  GUITARS_DATA: 'GUITARS_DATA',
  CART_DATA: 'CART_DATA',
};

const combine = combineReducers({
  [NameSpace.GUITARS_DATA]: guitarsData,
  [NameSpace.CART_DATA]: cartData,
});

export {NameSpace, combine as default};
