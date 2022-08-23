import React, { Component } from "react";
import LoginSuccess from "./LoginSuccess";
import LoginFail from "./LoginFail";
class LoginHandle extends Component {
  handleClick = (callBack) => {
    return callBack();
  };
  render() {
    let { handleFunction } = this.props;

    return (
      (handleFunction && <LoginSuccess></LoginSuccess>) || (
        <LoginFail></LoginFail>
      )
    );
  }
}

export default LoginHandle;
