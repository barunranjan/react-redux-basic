import React from "react";
import { connect } from "react-redux";
import {
  buyVegPastries,
  buyNonVegPastries,
} from "../redux/pastries/pastriesAction";

const PastriesContainer = (props) => {
  return (
    <div>
      <div>
        <h2>Num of veg pastries: {props.vegPastries}</h2>
        <button onClick={props.buyVegPastries}>buy pestries</button>
      </div>
      <div>
        <h2>Num of non-veg pastries: {props.nonVegPastries}</h2>
        <button onClick={props.buyNonVegPastries}>buy pestries</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    vegPastries: state.pastries.numOfVegPastries,
    nonVegPastries: state.pastries.numOfNonVegPastries,
  };
};
const mapActionToProps = {
  buyVegPastries: buyVegPastries,
  buyNonVegPastries: buyNonVegPastries,
};

export default connect(mapStateToProps, mapActionToProps)(PastriesContainer);
