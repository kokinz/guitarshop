import React from 'react';
import CatalogPage from '../catalog-page/catalog-page';
import CartPage from '../cart-page/cart-page'

import './app.scss';
import {Switch, Route} from 'react-router';
import {AppRoute} from '../../const';

function App() {

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <CatalogPage />
      </Route>

      <Route exact path={AppRoute.CART}>
        <CartPage />
      </Route>
    </Switch>
  );
}

export default App;
