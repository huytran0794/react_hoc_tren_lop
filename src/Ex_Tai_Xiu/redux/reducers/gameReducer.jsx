import { OPTION, PLAY_GAME, SELECT_OPTION } from "../const/gameConst";

const initialState = {
  choice: "",
  winTables: 0,
  totalTables: 0,
  diceArr: [
    {
      img: "./image/1.png",
      value: 1,
    },
    {
      img: "./image/2.png",
      value: 2,
    },
    {
      img: "./image/3.png",
      value: 3,
    },
  ],
};

let gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_GAME:
      state.totalTables++;
      let score = 0;
      let newDiceArr = [];
      state.diceArr.forEach((item) => {
        let randomNum = Math.floor(Math.random() * 6 + 1);
        score += randomNum;
        let newDiceObj = {
          img: `./image/${randomNum}.png`,
          value: randomNum,
        };
        newDiceArr.push(newDiceObj);
      });

      score >= 11
        ? state.choice === OPTION.TAI && state.winTables++
        : state.choice === OPTION.XIU && state.winTables++;
      state.diceArr = newDiceArr;
      return { ...state };
    case SELECT_OPTION:
      console.log(payload);
      return { ...state, choice: payload };
    default:
      return state;
  }
};

export default gameReducer;
