import * as types from "../types/types";
import utils from "../../../utils/utils";

const initialState = {
  height: 331,
  width: 237
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {

    case types.ZOOM_PLUS:
      return {
        ...state,
        height: state.width < utils.MAX_WIDTH ? state.height + utils.ZOOM_STEP : state.height,
        width: state.width < utils.MAX_WIDTH ? state.width + utils.ZOOM_STEP : state.width
      };

    case types.ZOOM_MINUS:
      return {
        ...state,
        height: state.width < utils.MIN_WIDTH ? state.height : state.height - utils.ZOOM_STEP,
        width: state.width < utils.MIN_WIDTH ? state.width : state.width - utils.ZOOM_STEP
      };

    case types.ADD_ITEM:
      return {
        ...state
      };

    case types.REMOVE_ITEM:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default dataRed;