import { VEG_BURGER, NON_VEG_BURGER } from "./burgerType";

export const buyVegBurger = () => {
  return {
    type: VEG_BURGER,
  };
};
export const buyNonVegBurger = (num) => {
  return {
    type: NON_VEG_BURGER,
    payload: num,
  };
};
