import { VEG_BURGER, NON_VEG_BURGER } from "./burgerType";

const initialState = {
  numOfVegBurger: 50,
  numOfNonVegBurger: 100,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case VEG_BURGER:
      return {
        ...state,
        numOfVegBurger: state.numOfVegBurger - 1,
      };
    case NON_VEG_BURGER:
      return {
        ...state,
        numOfNonVegBurger: state.numOfNonVegBurger - action.payload,
      };
    default:
      return state;
  }
};
export default burgerReducer;
