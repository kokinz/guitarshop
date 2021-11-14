import {NameSpace} from '../root-reducer';

const getGuitars = (state) => state[NameSpace.GUITARS_DATA].guitars;

export {getGuitars};
