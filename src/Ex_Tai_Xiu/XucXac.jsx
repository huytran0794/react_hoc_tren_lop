import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAction } from "./redux/actions/playActions";
import { OPTION } from "./redux/const/gameConst";

export class XucXac extends Component {
  flexCenterClass = ["flex", "flex-wrap", "justify-center", "items-center"];

  imgListClass = ["flex", "justify-center", "items-center", "gap-x-2", "w-48"];

  render() {
    return (
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => {
            this.props.handleSelectOption(OPTION.TAI);
          }}
          className="btn btn-tai bg-red-500 rounded-md flex flex-wrap justify-center items-center text-white w-20 h-7"
        >
          Tài
        </button>
        <div className={`img-list ${this.imgListClass.join(" ")}`}>
          {this.props.diceArray.map((dice) => {
            return (
              <div
                className="img-wrapper basis-4/12"
                style={{
                  width: "50px",
                  height: "50px",
                }}
                data-value={dice.value}
              >
                <img
                  className="w-full h-full"
                  src={dice.img}
                  alt=""
                  aspect-square
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            this.props.handleSelectOption(OPTION.XIU);
          }}
          className="btn btn-xiu bg-gray-400 rounded-md flex flex-wrap justify-center items-center text-white w-20 h-7"
        >
          Xỉu
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diceArray: state.gameReducer.diceArr,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectOption: (option) => {
      dispatch(selectAction(option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
