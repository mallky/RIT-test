import * as types from "./../types/types";

const initialState = {
  data: [],
  expanded: {
    id: null
  },
  currentDate: Math.round(+(new Date) / 1000),
  fromDate: (new Date(2018, 0, 1)).valueOf()
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_DATA:
      const data = action.data || state.data;

      return {
        ...state,
        data
      };

    default:
      return state;
  }
};

export default dataRed;