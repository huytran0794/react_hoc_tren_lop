import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decreMentAction,
  increMentAction,
} from "./redux/actions/numberActions";
import { DECREMENT, INCREMENT } from "./redux/const/numberConst";
class DemoReduxMini extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="quantity-adjust">
          <div
            className="btn btn-adjust btn-down"
            onClick={() => {
              this.props.decrement();
            }}
          >
            <span className="fa-solid fa-minus" />
          </div>
          <input
            type="text"
            className="product__quantity text-center"
            value={this.props.number}
          />
          <div
            className="btn btn-adjust btn-up"
            onClick={() => {
              this.props.increment();
            }}
          >
            <span className="fa-solid fa-plus" />
          </div>
        </div>
      </div>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    number: state.number.soLuong,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    increment: (value = 1) => {
      dispatch(increMentAction(value));
    },
    decrement: (value = 1) => {
      dispatch(decreMentAction(value));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(DemoReduxMini);
