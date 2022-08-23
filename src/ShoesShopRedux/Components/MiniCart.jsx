import React, { Component } from "react";

export default class MiniCart extends Component {
  renderMiniCartBody = () => {
    if (!this.props.cartData.length) {
      return (
        <li className="text-empty-cart text-center py-3">
          <span className="text-muted font-weight-light">
            There is no product in cart
          </span>
        </li>
      );
    }
    return this.props.cartData.map((item, idx) => {
      return (
        <li key={idx} className="product">
          <div className="product-wrapper px-4 d-flex align-items-center gap-20px">
            <div className="product-img">
              <img className="w-100 h-100" src={item.image} alt="" />
            </div>
            <div className="product-content d-flex align-items-center flex-column gap-2">
              <div className="product-name font-weight-bold">{item.name}</div>
              <div className="product-price w-100 text-muted d-flex align-items-center font-weight-bold gap-1">
                <div className="price">${item.price}</div>
                <span className="char char-2">*</span>
                <div className="cart-product-quantity">{item.quantity}</div>
                <span className="char char-2">=</span>
                <div className="cart-product-totalprice">
                  {item.price * item.quantity}
                </div>
              </div>
            </div>
            <div className="btn-del d-flex flex--center ml-auto">
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  this.props.handleRemoveFromCart(item.id);
                }}
              ></i>
            </div>
          </div>
        </li>
      );
    });
  };
  render() {
    return (
      <>
        <ul className="minicart">{this.renderMiniCartBody()}</ul>
      </>
    );
  }
}
