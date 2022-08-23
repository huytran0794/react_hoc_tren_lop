import React, { Component } from "react";
import UserInfo from "./UserInfo";
export default class DemoProps extends Component {
  state = {
    name: "Huy",
    age: "30",
    avatar: "https://picsum.photos/seed/picsum/200/300",
  };
  handleChangeName = (newName) => {
    this.setState({
      name: newName,
    });
  };
  render() {
    return (
      <div>
        <UserInfo
          user={this.state}
          handleChangeName={this.handleChangeName}
        ></UserInfo>
      </div>
    );
  }
}
