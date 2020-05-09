import React from 'react';
import cartsData from './cardtData';
import Carts from './carts';


class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      carts: cartsData,
    }
  }

  render() {
    const allCarts = this.state.carts.map(item => {
      return <Carts key={item.id} item={item} />
    });

    return (
      <main className="main">
        <div className="container">
          <section className="promo">
            <h1>Онлайн-сервис <br /> доставки еды на дом</h1>
            <p className="promo-text">Блюда из любимого ресторана привезет<br /> курьер в перчатках, маске и с антисептиком</p>
          </section>

          <section className="restaurants">
            <div className="section-heading">
              <h2 className="section-title">Рестораны</h2>
              <input type="text" className="input input-search" placeholder="Поиск блюд и рестаранов" />
            </div>
            <div className="cards">
              {allCarts}
            </div>
          </section>
        </div>
      </main>
    );
  };
};



export default Main;