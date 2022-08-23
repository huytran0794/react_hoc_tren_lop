import React, { Component } from "react";

class DemoLifeCycle extends Component {
  state = {
    like: 0,
  };
  render() {
    return (
      <div className="text-center">
        <div>
          <span>{like}</span>
          <button>
            onClick =
            {() => {
              this.setState({ like: this.state.like + 1 });
            }}
            <span className="text-red-600"> Plus like</span>
          </button>
        </div>
      </div>
    );
  }
}

export default DemoLifeCycle;
