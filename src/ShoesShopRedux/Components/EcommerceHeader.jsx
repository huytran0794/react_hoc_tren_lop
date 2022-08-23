import React, { Component } from "react";
import MiniCart from "./MiniCart";
export default class EcommerceHeader extends Component {
  render() {
    return (
      <>
        <nav className="ecommerce-nav navbar bg-light py-3">
          <div className="container container-fluid">
            <a
              className="navbar-brand font-weight-bold text-uppercase"
              href="#"
            >
              Ecommerce
            </a>
            <div className="navbar-nav mb-2 mb-lg-0">
              <div
                className="nav-item nav-cart d-flex flex--center position-relative"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
              >
                <i className="fa-solid fa-bag-shopping"></i>
                <div className="nav-cart__total-item d-flex flex--center">
                  <span className="item-count">
                    {this.props.cartData.length}
                  </span>
                </div>
                <MiniCart
                  cartData={this.props.cartData}
                  handleRemoveFromCart={this.props.handleRemoveFromCart}
                ></MiniCart>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
