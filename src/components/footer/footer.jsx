import React from 'react';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__logo-wrapper">
          <a className="footer__logo" href="/" aria-label="Guitar Shop">
            <svg className="footer__logo-image" width="67" height="70" viewBox="0 0 67 70">
              <use xlinkHref="#logo-white" />
            </svg>
          </a>

          <ul className="footer__social list">
            <li>
              <a href="/#" className="footer__social-link link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="/#" className="footer__social-link link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="/#" className="footer__social-link link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__nav nav">
          <ul className="footer__list list">
            <li className="footer__item footer__item--about-us">
              <p className="footer__item-header">О нас</p>

              <p className="footer__item-text">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>

              <p className="footer__item-text">Все инструменты проверены, отстроены и доведены до идеала! </p>
            </li>
            <li className="footer__item footer__item--catalog">
              <p className="footer__item-header">Каталог</p>

              <ul className="footer__item-list list">
                <li>
                  <a href="/#" className="footer__item-link link">Акустические гитары</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Классические гитары</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Электрогитары</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Бас-гитары</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Укулеле</a>
                </li>
              </ul>
            </li>
            <li className="footer__item footer__item--info">
              <p className="footer__item-header">Информация</p>

              <ul className="footer__item-list list">
                <li>
                  <a href="/#" className="footer__item-link link">Где купить?</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Блог</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Вопрос - ответ</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Возврат</a>
                </li>
                <li>
                  <a href="/#" className="footer__item-link link">Сервис-центры</a>
                </li>
              </ul>
            </li>
            <li className="footer__item footer__item--contacts">
              <p className="footer__item-header">Контакты</p>

              <p className="footer__item-text footer__item-text--contacts">
                г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6. <br />

                <svg width="10" height="10" viewBox="0 0 10 10">
                  <use xlinkHref="#phone"></use>
                </svg>

                &nbsp;8-812-500-50-50
              </p>

              <p className="footer__item-text footer__item-text--contacts">
                Режим работы: <br />

                <svg width="10" height="10" viewBox="0 0 10 10">
                    <use xlinkHref="#clock"></use>
                </svg>

                &nbsp;с 11:00 до 20:00, без выходных.
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
