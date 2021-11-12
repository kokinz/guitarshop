import React from "react";

function PopupDelete() {
  return (
    <section className="catalog__popup-overlay overlay">
      <div className="catalog__popup popup">
        <h2 className="popup__header">
          Удалить этот товар?
        </h2>

        <img className="popup__image" src="/img/electro-1.png" alt="Честер Bass" width="56" height="128" />

        <div className="popup__text-wrapper">
          <p className="popup__title">Гитара Честер bass</p>
          <p className="popup__reference">Артикул: SO757575</p>
          <p className="popup__type">Электрогитара, 6 струнная </p>
          <p className="popup__price">Цена: 17 500 ₽</p>
        </div>


        <button className="popup__delete-button button">
          Удалить товар
        </button>

        <button className="popup__buy-button popup__buy-button--cart button">
          Продолжить покупки
        </button>

        <button className="popup__close-button button">
          Закрыть
        </button>
      </div>
    </section>
  );

}

export default PopupDelete;
