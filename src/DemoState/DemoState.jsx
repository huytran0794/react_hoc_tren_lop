import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    isLogin: true,
    soLuong: 1,
  };
  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  handleIncrease = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };

  handeDecrease = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };
  render() {
    return (
      <div>
        {(this.state.isLogin && (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          ) && (
            <div className="quantity-adjust">
              <div
                className="btn btn-adjust btn-down"
                onClick={() => {
                  this.handeDecrease();
                }}
              >
                <span>-</span>
              </div>
              <span type="text" className="product__quantity text-center">
                {this.state.soLuong}
              </span>
              <div
                className="btn btn-adjust btn-up"
                onClick={() => {
                  this.handleIncrease();
                }}
              >
                <span>+</span>
              </div>
            </div>
          )) || (
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.handleLogin}
          >
            Login
          </button>
        )}
      </div>
    );
  }
}
