import React from "react";

function Catalog() {
  return (
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
          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Честер Bass</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/electro-1.png" alt="Честер Bass" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--half-active">star</span>
              </p>

              <p className="catalog__item-popular">
                15
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Честер Bass</span>
                <span className="catalog__item-price">17 500 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">СURT Z300</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/electro-2.png" alt="СURT Z300" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star">star</span>
              </p>

              <p className="catalog__item-popular">
                15
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">СURT Z300</span>
                <span className="catalog__item-price">29 500 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Roman LX</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/ukulele-1.png" alt="Roman LX" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star">star</span>
              </p>

              <p className="catalog__item-popular">
                21
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Roman LX</span>
                <span className="catalog__item-price">6 800 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">СURT T300</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/electro-3.png" alt="СURT T300" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--half-active">star</span>
              </p>

              <p className="catalog__item-popular">
                15
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">СURT T300</span>
                <span className="catalog__item-price">30 000 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Dania Super</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/ukulele-2.png" alt="Dania Super" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star">star</span>
              </p>

              <p className="catalog__item-popular">
                5
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Dania Super</span>
                <span className="catalog__item-price">3 500 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Честер WX </h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/electro-1.png" alt="Честер WX " width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--half-active">star</span>
              </p>

              <p className="catalog__item-popular">
                17
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Честер WX </span>
                <span className="catalog__item-price">15 300 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Dania VX</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/ukulele-1.png" alt="Dania VX" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star">star</span>
              </p>

              <p className="catalog__item-popular">
                5
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Dania VX</span>
                <span className="catalog__item-price">2 200 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Честер Plus</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/electro-4.png" alt="Честер Plus" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
              </p>

              <p className="catalog__item-popular">
                27
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Честер Plus</span>
                <span className="catalog__item-price">30 000 ₽</span>
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

          <li className="catalog__item">
            <article>
              <h3 className="visually-hidden">Виолана 300</h3>

              <p className="catalog__item-image-wrapper">
                <img className="catalog__item-image" src="/img/ukulele-2.png" alt="Виолана 300" width="68" height="190" />
              </p>

              <p className="catalog__item-rating">
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star catalog__item-star--active">star</span>
                <span className="catalog__item-star">star</span>
              </p>

              <p className="catalog__item-popular">
                3
              </p>

              <p className="catalog__item-price-wrapper">
                <span className="catalog__item-title">Виолана 300</span>
                <span className="catalog__item-price">1 700 ₽</span>
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
    </section>
  );
}

export default Catalog;
