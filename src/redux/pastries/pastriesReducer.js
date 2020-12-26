import { BUY_NON_VEG_PASTRIES, BUY_VEG_PASTRIES } from "./pastriesType";

const initialState = {
  numOfVegPastries: 30,
  numOfNonVegPastries: 25,
};

const pastriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_VEG_PASTRIES:
      return {
        ...state,
        numOfVegPastries: state.numOfVegPastries - 1,
      };
    case BUY_NON_VEG_PASTRIES:
      return {
        ...state,
        numOfNonVegPastries: state.numOfNonVegPastries - 1,
      };
    default:
      return state;
  }
};
export default pastriesReducer;
