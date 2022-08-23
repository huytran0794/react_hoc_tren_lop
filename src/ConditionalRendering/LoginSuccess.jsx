import React, { Component } from "react";

export default class LoginSuccess extends Component {
  render() {
    return (
      <div>
        <p>Hello user</p>
        <button className="btn btn-warning">Logout</button>
      </div>
    );
  }
}
