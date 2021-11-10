import React from 'react';

function Main() {

  return (
    <main className="main">
      <div className="main__wrapper container">
        <h1 className="main__header">Каталог гитар</h1>

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
          </ul>
        </nav>

        <section className="main__catalog catalog">
          <section className="catalog__filter filter">
            <h2 class="filter__title">Фильтр</h2>

            <form action="https://echo.htmlacademy.ru" className="filter__form">
              <fieldset className="filter__fieldset filter__fieldset--price">
                <h3 class="filter__fieldset-title">Цена, ₽</h3>

                <input type="text" className="filter__input" defaultValue="1 000" />

                <input type="text" className="filter__input" defaultValue="30 000" />
              </fieldset>

              <fieldset className="filter__fieldset filter__fieldset--type">
                <h3 class="filter__fieldset-title filter__fieldset-title--type">Тип гитар</h3>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="Акустические гитары" id="acoustic-guitars" value="acoustic-guitars" tabindex="-1" />
                <label class="filter__label" for="acoustic-guitars" tabindex="0">
                  Акустические гитары
                </label>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="Электрогитары" id="electric-guitars" value="electric-guitars" tabindex="-1" defaultChecked />
                <label class="filter__label" for="electric-guitars" tabindex="0">
                  Электрогитары
                </label>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="Укулеле" id="ukulele" value="ukulele" tabindex="-1" defaultChecked />
                <label class="filter__label" for="ukulele" tabindex="0">
                  Укулеле
                </label>
              </fieldset>

              <fieldset className="filter__fieldset filter__fieldset--strings">
                <h3 class="filter__fieldset-title filter__fieldset-title--strings">Количество струн</h3>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="four-strings" id="four-strings" value="four-strings" tabindex="-1" defaultChecked />
                <label class="filter__label" for="four-strings" tabindex="0">
                  4
                </label>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="six-strings" id="six-strings" value="six-strings" tabindex="-1" defaultChecked />
                <label class="filter__label" for="six-strings" tabindex="0">
                  6
                </label>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="seven-strings" id="seven-strings" value="seven-strings" tabindex="-1" />
                <label class="filter__label" for="seven-strings" tabindex="0">
                  7
                </label>

                <input class="filter__checkbox visually-hidden" type="checkbox" name="twelve-strings" id="twelve-strings" value="twelve-strings" tabindex="-1" disabled />
                <label class="filter__label" for="twelve-strings" tabindex="0">
                  12
                </label>
              </fieldset>

              <button class="filter__submit button" type="submit">
                Показать
              </button>
            </form>
          </section>

          <section className="catalog__sort sort">
            <h2 class="sort__title">Сортировать:</h2>

            <ul class="sort__list list">
              <li>
                <a href="/#" class="sort__item sort__item--correct link">По цене</a>
              </li>

              <li>
                <a href="/#" class="sort__item link">По популярности</a>
              </li>
            </ul>

            <ul class="sort__list-direction list">
              <li>
                <a class="sort__item-direction-ascending link" href="/#" aria-label="По возрастанию">По возрастанию</a>
              </li>
              <li>
                <a class="sort__item-direction-descending sort__item-direction--correct link" href="/#" aria-label="По убыванию">По убыванию</a>
              </li>
            </ul>
          </section>

          <section className="catalog__list">
            <ul class="catalog__cards-list list">
              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Честер Bass</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Честер Bass</span>
                    <span class="catalog__item-price">17 500 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">СURT Z300</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">СURT Z300</span>
                    <span class="catalog__item-price">29 500 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Roman LX</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Roman LX</span>
                    <span class="catalog__item-price">6 800 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">СURT T300</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">СURT T300</span>
                    <span class="catalog__item-price">30 000 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Dania Super</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Dania Super</span>
                    <span class="catalog__item-price">3 500 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Честер WX </h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Честер WX </span>
                    <span class="catalog__item-price">15 300 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Dania VX</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Dania VX</span>
                    <span class="catalog__item-price">2 200 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Честер Plus</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Честер Plus</span>
                    <span class="catalog__item-price">30 000 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>

              <li class="catalog__item">
                <article>
                  <h3 class="visually-hidden">Виолана 300</h3>

                  <p class="catalog__item-image-wrapper">
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

                  <p class="catalog__item-price-wrapper">
                    <span class="catalog__item-title">Виолана 300</span>
                    <span class="catalog__item-price">1 700 ₽</span>
                  </p>

                  <p class="catalog__item-cart-wrapper">
                    <a class="catalog__item-button link button" href="/#">Подробнее</a>
                    <a class="catalog__item-button catalog__item-button--buy link button" href="/#">
                      <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                        <use xlinkHref="#cart-buy" />
                      </svg>
                      Купить
                    </a>
                  </p>
                </article>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Main;
