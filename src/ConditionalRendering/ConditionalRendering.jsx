import React, { Component } from "react";
import LoginSuccess from "./LoginSuccess";
import LoginFail from "./LoginFail";
import LoginHandle from "./LoginHandle";
export default class ConditionalRendering extends Component {
  isLogin = true;
  handleLogout = () => {
    this.isLogin = false;
  };
  renderContent = () => {
    return this.handleLogout && 
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
