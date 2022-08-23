import React, { Component } from "react";
import styles from "./Headinng.module.css";
export default class Heading extends Component {
  render() {
    console.log(styles);
    return (
      <header>
        <h4>This is a heading text</h4>
      </header>
    );
  }
}
