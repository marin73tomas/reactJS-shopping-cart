import React from "react";
import { connect } from "react-redux";
const Results = () => {
  const { suggestions } = this.props;
  return <div>{suggestions}</div>;
};
const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  };
};
const wrapper = connect(mapStateToProps);
const component = wrapper(Results);

export default component;
