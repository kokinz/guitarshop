import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {guitarPropType} from '../../store/data.js';

import {getCart} from '../../store/cart-data/selectors.js';
import {AppRoute} from '../../const';

function Header({cart}) {

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link className="header__logo" to={AppRoute.MAIN} aria-label="Guitar Shop">
          <svg className="header__logo-image" width="67" height="70" viewBox="0 0 67 70">
            <use xlinkHref="#logo-black" />
          </svg>
        </Link>

        <nav className="header__nav">
          <ul className="header__site-list list">
            <li className="header__item">
              <Link className="header__link link" to={AppRoute.MAIN}>Каталог</Link>
            </li>
            <li className="header__item">
              <a className="header__link link" href="/#">Где купить?</a>
            </li>
            <li className="header__item">
              <a className="header__link link" href="/#">О компании</a>
            </li>
            <li className="header__item">
              <a className="header__link link" href="/#">Cервис-центры</a>
            </li>
          </ul>

          <ul className="header__user-list list">
            <li className="header__user-item">
              <a className="header__user-link link" href="/#">
                Местоположение
                <svg className="header__map-image" width="40" height="40" viewBox="0 0 40 40">
                  <use xlinkHref="#map" />
                </svg>
              </a>
            </li>
            <li className="header__user-item">
              <a className="header__user-link link" href="/#">
                Поиск
                <svg className="header__search-image" width="40" height="40" viewBox="0 0 40 40">
                  <use xlinkHref="#search" />
                </svg>
              </a>
            </li>
            <li className="header__user-item">
              <Link className="header__user-link link" to={AppRoute.CART}>
                Корзина
                <svg className="header__basket-image" width="16" height="18" viewBox="0 0 16 18">
                  <use xlinkHref="#basket" />
                </svg>
                <span className="header__count-cart">{cart.length ? cart.length : ''}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(guitarPropType).isRequired,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

export {Header};
export default connect(mapStateToProps, null)(Header);
