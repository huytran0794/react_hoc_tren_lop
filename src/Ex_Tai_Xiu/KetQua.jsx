import React, { Component } from "react";
import { connect } from "react-redux";
import { playAction } from "./redux/actions/playActions";
import { OPTION } from "./redux/const/gameConst";

export class KetQua extends Component {
  render() {
    let resultClass =
      this.props.choice === OPTION.TAI ? "text-rose-600" : "text-stone-600";
    let btnClass =
      "bg-green-600 rounded-md flex flex-wrap justify-center items-center text-white px-2.5 py-1.5";
    let flexCenterClass = "flex justify-center items-center";
    return (
      <div className={`content-wrapper ${flexCenterClass} flex-col`}>
        <button className={btnClass} onClick={this.props.handlePlaygame}>
          PLAY GAME
        </button>
        {this.props.choice && (
          <>
            <p>
              Bạn chọn:
              <span className={resultClass}>{this.props.choice}</span>
            </p>
            <p>
              Số lượt thắng: <span>${this.props.winTables}</span>
            </p>
            <p>
              Số lượt chơi: <span>${this.props.totalTables}</span>
            </p>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  choice: state.gameReducer.choice,
  winTables: state.gameReducer.winTables,
  totalTables: state.gameReducer.totalTables,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlaygame: () => {
      dispatch(playAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
