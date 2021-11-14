import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {guitarPropType} from '../../store/data.js';
import {getGuitars} from '../../store/guitars-data/selectors.js';

import {AppRoute} from '../../const';
import Footer from "../footer/footer";
import Header from "../header/header";
// import PopupDelete from "../popup/popup-delete/popup-delete";
// import PopupAdded from "../popup/popup-added/popup-added";
// import PopupAdd from "../popup/popup-add/popup-add";

function CatalogPage({guitars}) {
  return (
    <>
      <Header />

      <main className="main">
        <div className="main__wrapper container">
          <h1 className="main__header">Каталог гитар</h1>

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
            </ul>
          </nav>

          <section className="main__catalog catalog">
            <section className="catalog__filter filter">
              <h2 className="filter__title">Фильтр</h2>

              <form action="https://echo.htmlacademy.ru" className="filter__form">
                <fieldset className="filter__fieldset filter__fieldset--price">
                  <h3 className="filter__fieldset-title">Цена, ₽</h3>

                  <input type="text" className="filter__input" defaultValue="1 000" />

                  <input type="text" className="filter__input" defaultValue="30 000" />
                </fieldset>

                <fieldset className="filter__fieldset filter__fieldset--type">
                  <h3 className="filter__fieldset-title filter__fieldset-title--type">Тип гитар</h3>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="Акустические гитары" id="acoustic-guitars" value="acoustic-guitars" tabIndex="-1" />
                  <label className="filter__label" htmlFor="acoustic-guitars" tabIndex="0">
                    Акустические гитары
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="Электрогитары" id="electric-guitars" value="electric-guitars" tabIndex="-1" defaultChecked />
                  <label className="filter__label" htmlFor="electric-guitars" tabIndex="0">
                    Электрогитары
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="Укулеле" id="ukulele" value="ukulele" tabIndex="-1" defaultChecked />
                  <label className="filter__label" htmlFor="ukulele" tabIndex="0">
                    Укулеле
                  </label>
                </fieldset>

                <fieldset className="filter__fieldset filter__fieldset--strings">
                  <h3 className="filter__fieldset-title filter__fieldset-title--strings">Количество струн</h3>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="four-strings" id="four-strings" value="four-strings" tabIndex="-1" defaultChecked />
                  <label className="filter__label" htmlFor="four-strings" tabIndex="0">
                    4
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="six-strings" id="six-strings" value="six-strings" tabIndex="-1" defaultChecked />
                  <label className="filter__label" htmlFor="six-strings" tabIndex="0">
                    6
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="seven-strings" id="seven-strings" value="seven-strings" tabIndex="-1" />
                  <label className="filter__label" htmlFor="seven-strings" tabIndex="0">
                    7
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="twelve-strings" id="twelve-strings" value="twelve-strings" tabIndex="-1" disabled />
                  <label className="filter__label" htmlFor="twelve-strings" tabIndex="0">
                    12
                  </label>
                </fieldset>

                <button className="filter__submit button" type="submit">
                  Показать
                </button>
              </form>
            </section>

            <section className="catalog__sort sort">
              <h2 className="sort__title">Сортировать:</h2>

              <ul className="sort__list list">
                <li>
                  <a href="/#" className="sort__item sort__item--correct link">По цене</a>
                </li>

                <li>
                  <a href="/#" className="sort__item link">По популярности</a>
                </li>
              </ul>

              <ul className="sort__list-direction list">
                <li>
                  <a className="sort__item-direction-ascending link" href="/#" aria-label="По возрастанию">По возрастанию</a>
                </li>
                <li>
                  <a className="sort__item-direction-descending sort__item-direction--correct link" href="/#" aria-label="По убыванию">По убыванию</a>
                </li>
              </ul>
            </section>

            <section className="catalog__list">
              <ul className="catalog__cards-list list">
                {guitars.map((guitar) => (
                  <li className="catalog__item" key={guitar.reference}>
                    <article>
                      <h3 className="visually-hidden">{guitar.name}</h3>

                      <p className="catalog__item-image-wrapper">
                        <img className="catalog__item-image" src={`/img/${guitar.image}.png`} alt={guitar.name} width="68" height="190" />
                      </p>

                      <p className="catalog__item-rating">
                        <span className="catalog__item-star catalog__item-star--active">star</span>
                        <span className="catalog__item-star catalog__item-star--active">star</span>
                        <span className="catalog__item-star catalog__item-star--active">star</span>
                        <span className="catalog__item-star catalog__item-star--active">star</span>
                        <span className="catalog__item-star catalog__item-star--half-active">star</span>
                      </p>

                      <p className="catalog__item-popular">
                        {guitar.reviewsCount}
                      </p>

                      <p className="catalog__item-price-wrapper">
                        <span className="catalog__item-title">{guitar.name}</span>
                        <span className="catalog__item-price">{guitar.price} ₽</span>
                      </p>

                      <p className="catalog__item-cart-wrapper">
                        <a className="catalog__item-button link button" href="/#">Подробнее</a>
                        <a className="catalog__item-button catalog__item-button--buy link button" href="/#">
                          <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                            <use xlinkHref="#cart-buy" />
                          </svg>
                          Купить
                        </a>
                      </p>
                    </article>
                  </li>
                ))}
              </ul>

              <ul className="catalog__pagination-list list">
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button catalog__pagination-button--active link">
                    1
                  </a>
                </li>
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button link">
                    2
                  </a>
                </li>
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button link">
                    ...
                  </a>
                </li>
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button link">
                    7
                  </a>
                </li>
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button catalog__pagination-button--large link">
                    Далее
                  </a>
                </li>
              </ul>
            </section>

            {/* <PopupDelete /> */}
            {/* <PopupAdd /> */}
            {/* <PopupAdded /> */}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

CatalogPage.propTypes = {
  guitars: PropTypes.arrayOf(guitarPropType).isRequired,
};

const mapStateToProps = (state) => ({
  guitars: getGuitars(state),
});

export {CatalogPage};
export default connect(mapStateToProps, null)(CatalogPage);
