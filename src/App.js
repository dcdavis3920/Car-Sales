import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { newFeature, removeFeature } from "./actions";

const App = (props) => {
  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    console.log("in");
    props.removeFeature(item);
  };
  const buyItem = (item) => {
    // dipsatch an action here to add an item
    props.newFeature(item);
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures
          removeFeature={props.removeFeature}
          additionalFeatures={props.additionalFeatures}
          car={props.car}
        />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    car: state.car,
    additionalPrice: state.additionalPrice,
  };
};
export default connect(mapStateToProps, { newFeature, removeFeature })(App);
