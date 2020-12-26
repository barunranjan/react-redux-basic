import React, { useState } from "react";
import { connect } from "react-redux";
import { buyNonVegBurger, buyVegBurger } from "../redux/burger/burgerAction";

const BurgerContainer = (props) => {
  const [num, setNum] = useState(1);

  return (
    <div>
      <div>
        <h2>Num of veg Burger: {props.numOfVegBurger}</h2>
        <button onClick={props.buyVegBurger}>buy burger</button>
      </div>
      <div>
        <h2>Num of non veg Burger {props.numOfNonVegBurger} available</h2>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={() => props.buyNonVegBurger(num)}>buy burger</button>
      </div>
    </div>
  );
};
const mapActionToState = {
  buyVegBurger: buyVegBurger,
  buyNonVegBurger: buyNonVegBurger,
};

const mapStateToProps = (state) => {
  return {
    numOfVegBurger: state.burger.numOfVegBurger,
    numOfNonVegBurger: state.burger.numOfNonVegBurger,
  };
};

export default connect(mapStateToProps, mapActionToState)(BurgerContainer);
