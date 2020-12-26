import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import pastriesReducer from "./pastries/pastriesReducer";
import burgerReducer from "./burger/burgerReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  pastries: pastriesReducer,
  burger: burgerReducer,
  users: userReducer,
});

export default rootReducer;
