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
        </section>
      </div>
    </main>
  );
}

export default Main;
