import React, { Component } from "react";

export default class EventBinding extends Component {
  handleClick = () => {
    console.log("click for fun");
  };
  handleClick2 = (name) => {
    console.log(name);
  };
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.handleClick}>
          Click me 1
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.handleClick2("huy");
          }}
        >
          Click me 2
        </button>
      </div>
    );
  }
}
