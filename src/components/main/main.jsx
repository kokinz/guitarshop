import React from 'react';

function Main() {

  return (
    <main className="main">
      <div className="main__wrapper container">
        <h1 className="main__header">Каталог гитар</h1>

        <nav className="main__nav">
          <ul className="main__breadcrumbs list">
            <li>
              <a href="/#" className="main__breadcrumb link">
                Главная
              </a>
            </li>
            <li>
              <a href="/#" className="main__breadcrumb link">
                Каталог
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Main;
