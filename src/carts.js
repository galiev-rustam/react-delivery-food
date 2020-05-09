import React from 'react';
import image from './img/image.jpg';
import vector from './img/Vector.png';


function Carts(props) {

  return (
    <a href='#' className="cart">
      <img src={image} alt="" className="cart-img" />
      <div className="cart-text">
        <div className="cart-heading">
          <h3 className="cart-title">{props.item.cartTitle}</h3>
          <span className="cart-tag tag">{props.item.cartTag}</span>
        </div>
        <div className="cart-info">
          <div className="rating">
            <img src={vector} alt="" />
            {props.item.rating}
          </div>
          <div className="price">{props.item.price}</div>
          <div className="category">{props.item.category}</div>
        </div>
      </div>
    </a>
  );

};


export default Carts;