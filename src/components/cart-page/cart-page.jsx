import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {guitarPropType} from '../../store/data.js';
import {getCart} from '../../store/cart-data/selectors.js';

import {AppRoute} from '../../const';
import Footer from '../footer/footer';
import Header from '../header/header';
import PopupDelete from '../popup/popup-delete/popup-delete';

import {cartDelete} from '../../store/action.js';
import {getNumberFromString, getNumberWithSpaces} from '../../utils.js';

function CartPage({cartGuitars, onCartDelete}) {
  const MIN_COUNT = 1;
  const MAX_COUNT = 999;

  const [popupData, setPopupData] = useState(null);

  const [countGoods, setCountGoods] = useState(cartGuitars.map((guitar) => ({
    id: guitar.id,
    price: guitar.price,
    count: MIN_COUNT,
    sum: guitar.price * MIN_COUNT,
  })));

  const handleCountType = (evt) => {
    const number = getNumberFromString(evt.target.value);
    const id = parseInt(evt.target.id, 10);

    if (number < MIN_COUNT || number > MAX_COUNT) {
      return;
    }

    setCountGoods(countGoods.map((item) => item.dataset.id === id ? {
      id: item.id,
      price: item.price,
      count: number,
      sum: item.price * number,
    } : item));
  };

  const handleCountMinus = (evt) => {
    const id = parseInt(evt.target.dataset.id, 10);

    setCountGoods(countGoods.map((item, index) => {
      if (item.id === id) {
        if (item.count - 1 < MIN_COUNT) {
          setPopupData(cartGuitars[index]);
          document.body.style.height = '100vh';
          document.body.style.overflow = 'hidden';
          window.addEventListener('keydown', handleEscKeydown);
        }

        return {
          id: item.id,
          price: item.price,
          count: (item.count - 1) < MIN_COUNT ? MIN_COUNT : (item.count - 1),
          sum: (item.count - 1) < MIN_COUNT ? item.price * MIN_COUNT : item.price * (item.count - 1),
        };
      }

      return item;
    }));
  };

  const handleCountPlus = (evt) => {
    const id = parseInt(evt.target.dataset.id, 10);

    setCountGoods(countGoods.map((item) => item.id === id ? {
      id: item.id,
      price: item.price,
      count: (item.count + 1) > MAX_COUNT ? MAX_COUNT : (item.count + 1),
      sum: (item.count + 1) > MAX_COUNT ? item.price * MAX_COUNT : item.price * (item.count + 1),
    } : item));
  };

  const handleEscKeydown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();

      setPopupData(null);
      document.body.style.height = '100%';
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscKeydown);
    }
  };

  const handlePopupClose = () => {
    setPopupData(null);
    document.body.style.height = '100%';
    document.body.style.overflow = 'unset';
    window.removeEventListener('keydown', handleEscKeydown);
  }

  const handlePopupShownClick = (evt) => {
    const id = parseInt(evt.target.dataset.id, 10);

    setPopupData(cartGuitars.find((guitar) => guitar.id === id));

    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscKeydown);
  }

  const handleGuitarDeleteCartClick = (guitar) => {
    const index = countGoods.findIndex((item) => item.id === guitar.id);

    if (index > -1) {
      setCountGoods([...countGoods.slice(0, index), ...countGoods.slice(index + 1)]);
    }

    onCartDelete(guitar);
    handlePopupClose();
  };

  return (
    <>
      <Header />

      <main className="main">
        <div className="main__wrapper container">
          <h1 className="main__header main__header--cart">Корзина</h1>

          <nav className="main__nav">
            <ul className="main__breadcrumbs list">
              <li className="main__breadcrumb">
                <Link className="link" to={AppRoute.MAIN}>
                  Главная
                </Link>
              </li>
              <li className="main__breadcrumb">
                <Link className="link" to={AppRoute.MAIN}>
                  Каталог
                </Link>
              </li>
              <li className="main__breadcrumb">
                <Link className="link" to={AppRoute.CART}>
                  Оформляем
                </Link>
              </li>
            </ul>
          </nav>

          <section className="main__cart cart">
            <ul className="cart__list list">
              {cartGuitars.map((guitar, index) => (
                <li className="cart__item" key={guitar.reference}>
                  <button className="cart__delete" data-id={guitar.id} onClick={handlePopupShownClick}>Удалить</button>

                  <img className="cart__item-image" src={`/img/${guitar.image}.png`} alt={guitar.name} width="48" height="124" />

                  <div className="cart__text-wrapper">
                    <p className="cart__item-title">{guitar.type} {guitar.name}</p>
                    <p className="cart__item-reference">Артикул: {guitar.reference}</p>
                    <p className="cart__item-type">{guitar.type}, {guitar.stringsCount} струнная </p>
                  </div>

                  <p className="cart__item-price">{getNumberWithSpaces(guitar.price)} ₽</p>

                  <div className="cart__item-input-wrapper">
                    <button className="cart__item-button cart__item-button--minus button" data-id={guitar.id} onClick={handleCountMinus} >Минус</button>

                    <input className="cart__item-input" type="text" maxLength="3" data-id={guitar.id} value={countGoods[index].count} onChange={handleCountType}/>

                    <button className="cart__item-button cart__item-button--plus button" data-id={guitar.id} onClick={handleCountPlus} >Плюс</button>
                  </div>

                  <p className="cart__item-sum">{getNumberWithSpaces(guitar.price * countGoods[index].count)} ₽</p>
                </li>
              ))}
            </ul>

            <section className="cart__promo-code">
              <p className="cart__promo-title">Промокод на скидку</p>
              <p className="cart__promo-text">Введите свой промокод, если он у вас есть.</p>

              <input type="text" className="cart__promo-input" defaultValue="GITARAHIT" />

              <button className="cart__promo-button button">
                Применить купон
              </button>
            </section>

            {cartGuitars.length ?
            <p className="cart__sum">Всего: {getNumberWithSpaces(countGoods.map((good) => good.sum).reduce((prev, next) => prev + next))} ₽ </p> :
            <p className="cart__sum">Корзина пуста</p>}

            <button className="cart__order button">Оформить заказ</button>

            {popupData && <PopupDelete guitar={popupData} onClose={handlePopupClose} onCartDelete={handleGuitarDeleteCartClick} />}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

CartPage.propTypes = {
  cartGuitars: PropTypes.arrayOf(guitarPropType).isRequired,
  onCartDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cartGuitars: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartDelete(guitar) {
    dispatch(cartDelete(guitar))
  }
});

export {CartPage};
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
