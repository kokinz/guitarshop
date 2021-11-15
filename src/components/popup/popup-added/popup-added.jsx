import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";

function PopupAdded({onClose}) {
  const handlePopupClose = (evt) => {
    if (evt.target.dataset.name !== 'close') {
      return;
    }

    onClose();
  };

  return (
    <section className="catalog__popup-overlay overlay" data-name="close" onClick={handlePopupClose}>
      <div className="catalog__popup popup popup--added">
        <h2 className="popup__header">
          Товар успешно добавлен в корзину
        </h2>

        <Link className="popup__cart-button link button" to={AppRoute.CART} data-name="close" onClick={handlePopupClose}>
          Перейти в корзину
        </Link>

        <button className="popup__buy-button button" data-name="close" onClick={handlePopupClose}>
          Продолжить покупки
        </button>

        <button className="popup__close-button button" data-name="close" onClick={handlePopupClose}>
          Закрыть
        </button>
      </div>
    </section>
  );
}
PopupAdded.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupAdded;
