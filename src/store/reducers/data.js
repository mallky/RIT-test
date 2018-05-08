import * as types from "../types/types";
import utils from "../../../utils/utils";

const initialState = {
  height: 331,
  width: 237,
  items: []
};

const dataRIT = (state = initialState, action) => {
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
      const items = [...state.items];
      if (items.indexOf(action.item) === -1) {
        items.push(action.item);
      }

      return {
        ...state,
        items
      };

    case types.REMOVE_ITEM:
      let newItems = [...state.items];

      newItems = newItems.filter((item) => item !== action.item);
      utils.removeSelection(action.item);

      return {
        ...state,
        items: newItems
      };

    default:
      return state;
  }
};

export default dataRIT;