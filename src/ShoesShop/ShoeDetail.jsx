import React, { Component } from "react";

export default class ShoeDetail extends Component {
  render() {
    let { image, name, price, description, quantity } = this.props.shoeData;
    console.log(this.props.shoeData);
    return (
      <div
        className="modal fade product-modal"
        id="product-modal"
        tabIndex={-1}
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body product-detail">
              <div className="container container-fluid">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-xs-12 product__img d-flex flex--center">
                    <div className="product__img-wrapper d-flex flex--center">
                      <img className="d-block" src={image} alt="Hinh sp" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-xs-12">
                    <div className="product__content h-100 d-flex flex-column">
                      <div className="product__info product__heading">
                        <div className="stock-status text-uppercase text-white bg--green-radient d-flex flex--center gap-1">
                          <span className="title font-weight-bolder">
                            STOCK:
                          </span>
                          <span className="stock-quantity font-weight-bold">
                            {quantity}
                          </span>
                        </div>
                      </div>
                      <div className="product__info product__name text-capitalize">
                        <p className="sub-title type text-muted">{name}</p>
                        <p className="title font-weight-bold">{name}</p>
                      </div>
                      <div className="product__info product__desc">
                        <p className="text-muted">{description}</p>
                      </div>
                      <div className="product__info product__price d-flex align-item-center gap-1">
                        <p className="price-title">Price</p>
                        <span className="char char--1">:</span>
                        <p className="current-price ">${price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
