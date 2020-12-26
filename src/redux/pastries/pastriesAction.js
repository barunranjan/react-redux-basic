import { BUY_VEG_PASTRIES, BUY_NON_VEG_PASTRIES } from "./pastriesType";

export const buyVegPastries = () => {
  return {
    type: BUY_VEG_PASTRIES,
  };
};
export const buyNonVegPastries = () => {
  return {
    type: BUY_NON_VEG_PASTRIES,
  };
};
