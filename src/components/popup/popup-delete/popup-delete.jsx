import React from "react";
import PropTypes from 'prop-types';
import { guitarPropType } from "../../../store/data";
import { getNumberWithSpaces } from "../../../utils";

function PopupDelete({guitar, onClose, onCartDelete}) {
  const handlePopupClose = (evt) => {
    if (evt.target.dataset.name !== 'close') {
      return;
    }

    onClose();
  };

  return (
    <section className="catalog__popup-overlay overlay" data-name="close" onClick={handlePopupClose}>
      <div className="catalog__popup popup">
        <h2 className="popup__header">
          Удалить этот товар?
        </h2>

        <img className="popup__image" src={`/img/${guitar.image}.png`} alt={guitar.name} width="56" height="128" />

        <div className="popup__text-wrapper">
          <p className="popup__title">Гитара {guitar.name}</p>
          <p className="popup__reference">Артикул: {guitar.reference}</p>
          <p className="popup__type">{guitar.type}, {guitar.stringsCount} струнная </p>
          <p className="popup__price">Цена: {getNumberWithSpaces(guitar.price)} ₽</p>
        </div>


        <button className="popup__delete-button button" onClick={() => onCartDelete(guitar)}>
          Удалить товар
        </button>

        <button className="popup__buy-button popup__buy-button--cart button" data-name="close" onClick={handlePopupClose}>
          Продолжить покупки
        </button>

        <button className="popup__close-button button" data-name="close" onClick={handlePopupClose}>
          Закрыть
        </button>
      </div>
    </section>
  );
}

PopupDelete.propTypes = {
  guitar: guitarPropType.isRequired,
  onCartDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupDelete;
