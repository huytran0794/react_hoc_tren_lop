import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    let { name, img, price, id } = this.props.item;
    return (
      <div className="col-lg-3 col-md-4 col-xs-6 my-3">
        <div className={`card card-product card-${id}`}>
          <img className="card-img-top" src={img} alt="" />
          <div className="card-body">
            <h4 className="card-title display-5">{name}</h4>
            <p className="card-price font-weight-bold">{price}</p>
            <a href="#" className="btn btn-primary mx-auto">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
