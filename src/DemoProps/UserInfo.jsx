import React, { Component } from "react";

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`${this.props.user.avatar}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              <h5 className="uname">{this.props.user.name}</h5>
              <p className="uage">{this.props.user.age}</p>
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => {
                this.props.handleChangeName("Bob");
              }}
            >
              Change name
            </a>
          </div>
        </div>
      </div>
    );
  }
}
