import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {guitarPropType} from '../../store/data.js';
import {getGuitars} from '../../store/guitars-data/selectors.js';

import {AppRoute, GuitarType, StringsCount} from '../../const';
import Footer from "../footer/footer";
import Header from "../header/header";
import {getNumberFromString, getNumberWithSpaces} from "../../utils.js";

import PopupAdded from "../popup/popup-added/popup-added";
import PopupAdd from "../popup/popup-add/popup-add";
import {cartAdd} from "../../store/action.js";

const SHOWN_COUNT = 9;

const Price = {
  MAX: 35000,
  MIN: 1700,
};

const SortType = {
  PRICE: 'byPrice',
  POPULAR: 'byPopular',
};

const SortDirection= {
  UP: 'up',
  DOWN: 'down',
};

function CatalogPage({guitars, onCartAdd}) {
  const [focusedInputMin, setFocusedInputMin] = useState(false);
  const [focusedInputMax, setFocusedInputMax] = useState(false);
  const [sort, setSort] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [currentGuitars, setCurrentGuitars] = useState(guitars);
  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(Math.ceil(currentGuitars.length / SHOWN_COUNT));
  const [popupGuitar, setPopupGuitar] = useState(false);
  const [popupGuitarAdded, setPopupGuitarAdded] = useState(false);

  const [priceRange, setPriceRange] = useState({
    max: Price.MAX,
    min: Price.MIN,
  });

  const [guitarType, setGuitarType] = useState({
    electro: false,
    ukulele: false,
    acoustic: false,
  });

  const [stringsType, setStringsType] = useState({
    four: false,
    six: false,
    seven: false,
    twelve: false,
  });

  const [stringsCount, setStringsCount] = useState({
    four: true,
    six: true,
    seven: true,
    twelve: true,
  });

  useEffect(() => {
    const array = guitars.filter((guitar) => {
      let result = false;

      if (guitarType.electro && !result) {
        result = guitar.type === GuitarType.ELECTRO;
      }

      if (guitarType.ukulele && !result) {
        result = guitar.type === GuitarType.UKULELE;
      }

      if (guitarType.acoustic && !result) {
        result = guitar.type === GuitarType.ACOUSTIC;
      }

      if (result) {
        result = (guitar.price >= priceRange.min && guitar.price <= priceRange.max);
      }

      if (result) {
        result = false;

        if (!stringsType.four && stringsCount.four && !result) {
          result = guitar.stringsCount === StringsCount.FOUR;
        }

        if (!stringsType.six && stringsCount.six && !result) {
          result = guitar.stringsCount === StringsCount.SIX;
        }

        if (!stringsType.seven && stringsCount.seven && !result) {
          result = guitar.stringsCount === StringsCount.SEVEN;
        }

        if (!stringsType.twelve && stringsCount.twelve && !result) {
          result = guitar.stringsCount === StringsCount.TWELVE;
        }
      }

      if (!guitarType.acoustic && !guitarType.ukulele && !guitarType.electro) {
        return result = true;
      }

      return result;
    });

    if (sort === SortType.PRICE) {
      if (sortDirection === null || sortDirection === SortDirection.UP) {
        setCurrentGuitars(array.sort((a, b) => a.price - b.price));
        setSortDirection(SortDirection.UP);
      }

      if (sortDirection === SortDirection.DOWN) {
        setCurrentGuitars(array.sort((a, b) => b.price - a.price));
      }
    }

    if (sort === SortType.POPULAR) {
      if (sortDirection === null || sortDirection === SortDirection.UP) {
        setCurrentGuitars(array.sort((a, b) => a.reviewsCount - b.reviewsCount));
        setSortDirection(SortDirection.UP);
      }

      if (sortDirection === SortDirection.DOWN) {
        setCurrentGuitars(array.sort((a, b) => b.reviewsCount - a.reviewsCount));
      }
    }

    setPagesCount(Math.ceil(array.length / SHOWN_COUNT));
    setCurrentGuitars(array);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guitarType,
      sort,
      sortDirection,
      priceRange,
      stringsCount,
  ]);

  useEffect(() => {
    if (guitarType.ukulele && !guitarType.electro && !guitarType.acoustic) {
      setStringsType({
        four: false,
        six: true,
        seven: true,
        twelve: true,
      });

      setStringsCount({
        four: true,
        six: false,
        seven: false,
        twelve: false,
      });
    }

    if (guitarType.acoustic && !guitarType.electro && !guitarType.ukulele) {
      setStringsType({
        four: true,
        six: false,
        seven: false,
        twelve: false,
      });

      setStringsCount({
        four: false,
        six: true,
        seven: true,
        twelve: true,
      });
    }

    if (guitarType.electro && !guitarType.acoustic) {
      setStringsType({
        four: false,
        six: false,
        seven: false,
        twelve: true,
      });

      setStringsCount({
        four: true,
        six: true,
        seven: true,
        twelve: false,
      });
    }

    if ((guitarType.electro && guitarType.acoustic) || (guitarType.acoustic && guitarType.ukulele)) {
      setStringsType({
        four: false,
        six: false,
        seven: false,
        twelve: false,
      });

      setStringsCount({
        four: true,
        six: true,
        seven: true,
        twelve: true,
      });
    }

    if (!guitarType.electro && !guitarType.acoustic && !guitarType.ukulele) {
      setStringsType({
        four: true,
        six: true,
        seven: true,
        twelve: true,
      });

      setStringsCount({
        four: false,
        six: false,
        seven: false,
        twelve: false,
      });
    }
  }, [guitarType]);

  useEffect(() => {
    if (priceRange.min < Price.MIN && !focusedInputMin) {
      return setPriceRange({
        ...priceRange,
        min: Price.MIN,
      });
    }

    if (priceRange.min > priceRange.max && priceRange.max > Price.MIN && !focusedInputMin) {
      return setPriceRange({
        ...priceRange,
        min: priceRange.max,
      });
    }

    if (priceRange.max > Price.MAX && !focusedInputMax) {
      return setPriceRange({
        ...priceRange,
        max: Price.MAX,
      });
    }

    if (priceRange.max < priceRange.min && !focusedInputMax) {
      return setPriceRange({
        ...priceRange,
        max: priceRange.min,
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedInputMin, focusedInputMax]);

  const handleInputMinFocus = () => {
    setFocusedInputMin(true);
  }

  const handleInputMaxFocus = () => {
    setFocusedInputMax(true);
  }

  const handleInputMinBlur = () => {
    setFocusedInputMin(false);
  }

  const handleInputMaxBlur = () => {
    setFocusedInputMax(false);
  }

  const handleSortPriceClick = (evt) => {
    evt.preventDefault();

    setSort(SortType.PRICE);
  };

  const handleSortPopularClick = (evt) => {
    evt.preventDefault();

    setSort(SortType.POPULAR);
  };

  const handleSortAscendingClick = (evt) => {
    evt.preventDefault();

    if (sortDirection === SortDirection.UP) {
      return;
    }

    if (sort === null) {
      setSort(SortType.PRICE);
    }

    setSortDirection(SortDirection.UP);
    setCurrentGuitars(currentGuitars.reverse());
  };

  const handleSortDescendingClick = (evt) => {
    evt.preventDefault();

    if (sortDirection === SortDirection.DOWN) {
      return;
    }

    if (sort === null) {
      setSort(SortType.PRICE);
    }

    setSortDirection(SortDirection.DOWN);
    setCurrentGuitars(currentGuitars.reverse());
  };

  const handleMinPriceType = (evt) => {
    const number = getNumberFromString(evt.target.value);

    setPriceRange({
      ...priceRange,
      min: number,
    });
  };

  const handleMaxPriceType = (evt) => {
    const number = getNumberFromString(evt.target.value);

    setPriceRange({
      ...priceRange,
      max: number,
    });
  };

  const handleGuitarTypeChange = (evt) => {
    switch(evt.target.value) {
      case GuitarType.ELECTRO: {
        return setGuitarType({
          ...guitarType,
          electro: evt.target.checked,
        });
      }
      case GuitarType.ACOUSTIC: {
        return setGuitarType({
          ...guitarType,
          acoustic: evt.target.checked,
        });
      }
      case GuitarType.UKULELE: {
        return setGuitarType({
          ...guitarType,
          ukulele: evt.target.checked,
        });
      }
      default: {
        return;
      }
    }
  };

  const handleStringsCountClick = (evt) => {
    switch(parseInt(evt.target.value, 10)) {
      case StringsCount.FOUR: {
        return setStringsCount({
          ...stringsCount,
          four: evt.target.checked,
        });
      }
      case StringsCount.SIX: {
        return setStringsCount({
          ...stringsCount,
          six: evt.target.checked,
        });
      }
      case StringsCount.SEVEN: {
        return setStringsCount({
          ...stringsCount,
          seven: evt.target.checked,
        });
      }
      case StringsCount.TWELVE: {
        return setStringsCount({
          ...stringsCount,
          twelve: evt.target.checked,
        });
      }
      default: {
        return;
      }
    }
  };

  const handleNextPageClick = (evt) => {
    evt.preventDefault();

    setActivePage(activePage + 1);
  };

  const handlePrevPageClick = (evt) => {
    evt.preventDefault();

    setActivePage(activePage - 1);
  };

  const handleLinkPageClick = (evt) => {
    evt.preventDefault();
    setActivePage(parseInt(evt.target.id, 10));
  };

  const handleEscKeydown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();

      setPopupGuitar(null);
      setPopupGuitarAdded(false);
      document.body.style.height = '100%';
      document.body.style.overflowY = 'unset';
      window.removeEventListener('keydown', handleEscKeydown);
    }
  };

  const handleBuyClick = (evt) => {
    const id = parseInt(evt.target.dataset.id, 10);
    const result = currentGuitars.find((guitar) => guitar.id === id);

    evt.preventDefault();

    setPopupGuitar(result);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleEscKeydown);
  };

  const handlePopupAddClose = () => {
    setPopupGuitar(null);
    document.body.style.height = '100%';
    document.body.style.overflowY = 'unset';
    window.removeEventListener('keydown', handleEscKeydown);
  };

  const handleGuitarAddCartClick = (guitar) => {
    onCartAdd(guitar);
    setPopupGuitar(null);
    setPopupGuitarAdded(true);
  };

  const handlePopupAddedClose = () => {
    setPopupGuitarAdded(false);
    document.body.style.height = '100%';
    document.body.style.overflowY = 'unset';
    window.removeEventListener('keydown', handleEscKeydown);
  };

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

                  <input type="text" className="filter__input" id="input-min" maxLength="8" onFocus={handleInputMinFocus} onBlur={handleInputMinBlur} onChange={handleMinPriceType} placeholder="1 700" value={priceRange.min !== Price.MIN ? getNumberWithSpaces(priceRange.min) : ''} />
                  <label htmlFor="input-min" className="visually-hidden">Минимум</label>

                  <input type="text" className="filter__input" id="input-max" maxLength="8" onFocus={handleInputMaxFocus} onBlur={handleInputMaxBlur} onChange={handleMaxPriceType} placeholder="35 000" value={priceRange.max !== Price.MAX ? getNumberWithSpaces(priceRange.max) : ''} />
                  <label htmlFor="input-max" className="visually-hidden">Максимум</label>
                </fieldset>

                <fieldset className="filter__fieldset filter__fieldset--type">
                  <h3 className="filter__fieldset-title filter__fieldset-title--type">Тип гитар</h3>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="Акустические гитары" id="acoustic-guitars" value={GuitarType.ACOUSTIC} tabIndex="-1" defaultChecked={guitarType.acoustic} onChange={handleGuitarTypeChange} />
                  <label className="filter__label" htmlFor="acoustic-guitars" tabIndex="0">
                    Акустические гитары
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="Электрогитары" id="electric-guitars" value={GuitarType.ELECTRO} tabIndex="-1" defaultChecked={guitarType.electro} onChange={handleGuitarTypeChange} />
                  <label className="filter__label" htmlFor="electric-guitars" tabIndex="0">
                    Электрогитары
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="Укулеле" id="ukulele" value={GuitarType.UKULELE} tabIndex="-1" defaultChecked={guitarType.ukulele} onChange={handleGuitarTypeChange} />
                  <label className="filter__label" htmlFor="ukulele" tabIndex="0">
                    Укулеле
                  </label>
                </fieldset>

                <fieldset className="filter__fieldset filter__fieldset--strings">
                  <h3 className="filter__fieldset-title filter__fieldset-title--strings">Количество струн</h3>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="four-strings" id="four-strings" value={StringsCount.FOUR} tabIndex="-1" disabled={stringsType.four} checked={stringsCount.four} onChange={handleStringsCountClick} />
                  <label className="filter__label" htmlFor="four-strings" tabIndex="0">
                    4
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="six-strings" id="six-strings" value={StringsCount.SIX} tabIndex="-1" disabled={stringsType.six} checked={stringsCount.six} onChange={handleStringsCountClick} />
                  <label className="filter__label" htmlFor="six-strings" tabIndex="0">
                    6
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="seven-strings" id="seven-strings" value={StringsCount.SEVEN} tabIndex="-1" disabled={stringsType.seven} checked={stringsCount.seven} onChange={handleStringsCountClick} />
                  <label className="filter__label" htmlFor="seven-strings" tabIndex="0">
                    7
                  </label>

                  <input className="filter__checkbox visually-hidden" type="checkbox" name="twelve-strings" id="twelve-strings" value={StringsCount.TWELVE} tabIndex="-1" disabled={stringsType.twelve} checked={stringsCount.twelve} onChange={handleStringsCountClick} />
                  <label className="filter__label" htmlFor="twelve-strings" tabIndex="0">
                    12
                  </label>
                </fieldset>
              </form>
            </section>

            <section className="catalog__sort sort">
              <h2 className="sort__title">Сортировать:</h2>

              <ul className="sort__list list">
                <li>
                  <a href="/#" className={`sort__item link ${sort === SortType.PRICE ? 'sort__item--active' : ''}`} onClick={handleSortPriceClick}>По цене</a>
                </li>

                <li>
                  <a href="/#" className={`sort__item link ${sort === SortType.POPULAR ? 'sort__item--active' : ''}`} onClick={handleSortPopularClick}>По популярности</a>
                </li>
              </ul>

              <ul className="sort__list-direction list">
                <li>
                  <a className={`sort__item-direction-ascending link ${sortDirection === SortDirection.UP ? 'sort__item-direction-ascending--correct' : ''}`} href="/#" aria-label="По возрастанию" onClick={handleSortAscendingClick}>По возрастанию</a>
                </li>
                <li>
                  <a className={`sort__item-direction-descending link ${sortDirection === SortDirection.DOWN ? 'sort__item-direction-descending--correct' : ''}`} href="/#" aria-label="По убыванию" onClick={handleSortDescendingClick}>По убыванию</a>
                </li>
              </ul>
            </section>

            <section className="catalog__list">
              {currentGuitars.length ? <ul className="catalog__cards-list list">
                {currentGuitars.slice((activePage - 1) * SHOWN_COUNT, activePage * SHOWN_COUNT).map((guitar) => (
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
                        <a className="catalog__item-button catalog__item-button--buy link button" data-id={guitar.id} href="/#" onClick={handleBuyClick}>
                          <svg className="catalog__item-button-image" width="12" height="13" viewBox="0 0 12 13">
                            <use xlinkHref="#cart-buy" />
                          </svg>
                          Купить
                        </a>
                      </p>
                    </article>
                  </li>
                ))}
              </ul> : <h2 >Результатов не найдено</h2>}

              {pagesCount !== 1 ?
              <ul className="catalog__pagination-list list">
                {activePage !== 1 ?
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button catalog__pagination-button--large link" onClick={handlePrevPageClick}>
                    Назад
                  </a>
                </li> : ''}

                {Array.from({length: pagesCount}).map((_elem, index) => (
                  <li className="catalog__pagination-item" key={Date.now() * Math.random()}>
                    <a href="/#" id={index + 1} className={`catalog__pagination-button link ${activePage === index + 1 ? 'catalog__pagination-button--active' : ''}`} onClick={handleLinkPageClick}>
                      {index + 1}
                    </a>
                  </li>
                ))}

                {activePage !== pagesCount && pagesCount !== 1 && pagesCount !== 0 ?
                <li className="catalog__pagination-item">
                  <a href="/#" className="catalog__pagination-button catalog__pagination-button--large link" onClick={handleNextPageClick}>
                    Далее
                  </a>
                </li> : ''}
              </ul> : ''}
            </section>

            {popupGuitar && <PopupAdd guitar={popupGuitar} onClose={handlePopupAddClose} onCartAdd={handleGuitarAddCartClick} /> }
            {popupGuitarAdded && <PopupAdded onClose={handlePopupAddedClose} /> }
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

CatalogPage.propTypes = {
  guitars: PropTypes.arrayOf(guitarPropType).isRequired,
  onCartAdd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guitars: getGuitars(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartAdd(guitar) {
    dispatch(cartAdd(guitar))
  }
});

export {CatalogPage};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
