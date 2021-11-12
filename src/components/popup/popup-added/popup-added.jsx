import React from "react";

function PopupAdd() {
  return (
    <section className="catalog__popup-overlay overlay">
      <div className="catalog__popup popup popup--added">
        <h2 className="popup__header">
          Товар успешно добавлен в корзину
        </h2>

        <button className="popup__cart-button button">
          Перейти в корзину
        </button>

        <button className="popup__buy-button button">
          Продолжить покупки
        </button>

        <button className="popup__close-button button">
          Закрыть
        </button>
      </div>
    </section>
  );
}

export default PopupAdd;
