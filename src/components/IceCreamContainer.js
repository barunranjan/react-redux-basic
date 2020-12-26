import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Num of iceCreams : {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};
const mapActionToProps = {
  buyIceCream: buyIceCream,
};

export default connect(mapStateToProps, mapActionToProps)(IceCreamContainer);
