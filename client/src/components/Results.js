import { connect } from "react-redux";
import findResults from "../actions/findResults";
import React, { Component } from "react";

class Results extends Component {
  componentDidMount() {
    const title = this.props.match.params.title;
    this.props.findResults(title);
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { results } = this.props;
    return <div>{results}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    results: getProduct(state),
  };
};
/* const mapDispatchToProps = (dispatch) => {
    const dispactFunction = 
} */
export default connect(mapStateToProps, { findResults })(Results);
