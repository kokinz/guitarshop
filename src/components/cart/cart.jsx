import React from 'react';

function Cart() {

  return (
    <section className="main__cart cart">
      <ul className="cart__list list">
        <li className="cart__item">
          <button className="cart__delete">Удалить</button>

          <img className="cart__item-image" src="/img/electro-1.png" alt="Честер Bass" width="48" height="124" />

          <div className="cart__text-wrapper">
            <p className="cart__item-title">ЭлектроГитара Честер bass</p>
          </div>
        </li>
      </ul>

      <section className="cart__promo-code">
        <p className="cart__promo-title">Промокод на скидку</p>
        <p className="cart__promo-text">Введите свой промокод, если он у вас есть.</p>

        <input type="text" className="cart__promo-input" />

        <button className="cart__promo-button button">
          Применить купон
        </button>
      </section>

      <p className="cart__sum">Всего: 47 000 ₽ </p>

      <button className="cart__order button">Оформить заказ</button>
    </section>
  );
}

export default Cart;
