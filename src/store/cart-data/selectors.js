import {NameSpace} from '../root-reducer';

const getCart = (state) => state[NameSpace.CART_DATA].cart;

export {getCart};
