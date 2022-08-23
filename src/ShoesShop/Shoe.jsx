import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    let { name, alias, image, price, description, quantity } = this.props.data;
    return (
      <div className="product__content d-flex flex-column justify-content-between py-3 px-3 bg-white rounded">
        <div className="product__info product__heading">
          <div className="stock-status text-white text-uppercase bg--green-radient d-flex flex--center gap-1">
            <span className="title text-uppercase font-weight-bolder">
              STOCK:
            </span>
            <span className="font-weight-bold">{quantity}</span>
          </div>
        </div>
        <div className="product__info product__img d-flex justify-content-center align-item-center">
          <div className="product__img-container">
            <img src={image} alt="Hinh sp" />
          </div>
        </div>
        <div className="product__info product__name text-capitalize font-weight-bold">
          <p className="sub-title text-muted text-center">{alias}</p>
          <p className="title text-center">{name}</p>
        </div>
        <div className="product__info product__desc">
          <p className="text-muted">{description}</p>
        </div>
        <div className="product__info product__price">
          <p className="current-price text-danger font-weight-bold text-white text-center bg">
            {`$${price}`}
          </p>
        </div>
        <div className="btn-group">
          <button
            onClick={() => {
              this.props.handleAddToCart(this.props.data);
            }}
            className="btn btn-outline-primary btn-add-cart text-center"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            onClick={() => {
              this.props.handleGetShoeDetail(this.props.data);
            }}
            className="btn btn-outline-info btn-view-detail text-center"
            data-toggle="modal"
            data-target="#product-modal"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
    );
  }
}
