import React, { Component } from "react";
import bgGame from "../assets/bgGame.png";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
export default class Ex_Tai_Xiu extends Component {
  containerClass = [
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "h-full",
  ];
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgGame})`,
          width: "100vw",
          height: "100vh",
        }}
        className="main"
      >
        <div className="bg__game container mx-auto h-screen w-screen">
          <div className={`content-wrapper ${this.containerClass.join(" ")}`}>
            <XucXac />
            <KetQua />
          </div>
        </div>
      </div>
    );
  }
}
