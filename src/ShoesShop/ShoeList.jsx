import React, { Component } from "react";
import Shoe from "./Shoe";

export default class ShoeList extends Component {
  render() {
    let { shoeArr } = this.props;
    return (
      <div className="container container-fluid">
        <div className="row">
          {this.props.shoeArr.map((item, idx) => {
            return (
              <div
                key={idx.toString() + item.id}
                className="product col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3 "
                id={item.id}
              >
                <Shoe
                  data={item}
                  handleGetShoeDetail={this.props.handleGetShoeDetail}
                  handleAddToCart={this.props.handleAddToCart}
                  handleRemove={this.props.handleRemove}
                ></Shoe>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
