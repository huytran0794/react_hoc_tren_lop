import { PLAY_GAME, SELECT_OPTION } from "../const/gameConst";
let playAction = () => {
  return {
    type: PLAY_GAME,
  };
};

let selectAction = (value) => {
  return {
    type: SELECT_OPTION,
    payload: value,
  };
};

export { playAction, selectAction };
