import React from 'react';
import Cart from '../cart/cart';

function Main() {

  return (
    <main className="main">
      <div className="main__wrapper container">
        {/*<h1 className="main__header">Каталог гитар</h1>*/}
        <h1 className="main__header main__header--cart">Корзина</h1>

        <nav className="main__nav">
          <ul className="main__breadcrumbs list">
            <li className="main__breadcrumb">
              <a href="/#" className="link">
                Главная
              </a>
            </li>
            <li className="main__breadcrumb">
              <a href="/#" className="link">
                Каталог
              </a>
            </li>
            <li className="main__breadcrumb">
              <a href="/#" className="link">
                Оформляем
              </a>
            </li>
          </ul>
        </nav>

        {/*<Catalog /> */}
        <Cart />
      </div>
    </main>
  );
}

export default Main;
