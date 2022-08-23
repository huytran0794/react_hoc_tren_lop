import React, { Component } from "react";
import { connect } from "react-redux";
import { viewDetailAction } from "./redux/actions/viewDetailAction";
class Shoe extends Component {
  render() {
    let { id, name, alias, image, price, description, quantity } =
      this.props.data;
    return (
      <div
        id={id}
        className="
          product col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3"
      >
        <div className="product__content flex flex-col justify-between py-3 px-3 bg-slate-200 rounded shadow-blue-500">
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
              // onClick={() => {
              //   this.props.handleAddToCart(this.props.data);
              // }}
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
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleGetShoeDetail: (value) => {
      dispatch(viewDetailAction(value));
    },
  };
};

export default connect(mapDispatchToProps)(Shoe);
