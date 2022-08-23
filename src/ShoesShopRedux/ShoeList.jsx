import React, { Component } from "react";
import Shoe from "./Shoe";
import { connect } from "react-redux";
class ShoeList extends Component {
  render() {
    console.log(this.props.shoeArr);
    return (
      <div className="container container-fluid">
        <div className="row">
          {this.props.shoeArr.map((item, idx) => {
            return <Shoe key={idx.toString() + item.id} data={item}></Shoe>;
          })}
        </div>
      </div>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStatetoProps)(ShoeList);
