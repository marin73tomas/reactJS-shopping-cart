import React, { Component } from "react";
import { Button, FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      imgLink: null,
      price: null,
      inputs: new Set(),
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }
  handleTitle(e) {
    let element = e.currentTarget;
    let value = element.value;
    this.setState((prev) => {
      return { ...this.prev, title: value, inputs: prev.inputs.add(element) };
    });
  }
  handleDescription(e) {
    let element = e.currentTarget;
    let value = element.value;
    this.setState((prev) => {
      return {
        ...this.prev,
        description: value,
        inputs: prev.inputs.add(element),
      };
    });
  }
  handlePrice(e) {
    let element = e.currentTarget;
    let value = element.value;
    this.setState((prev) => {
      return { ...this.prev, price: value, inputs: prev.inputs.add(element) };
    });
  }
  handleImg(e) {
    let element = e.currentTarget;
    let value = element.value;
    this.setState((prev) => {
      return { ...this.prev, price: value, inputs: prev.inputs.add(element) };
    });
  }
  clearInputs() {
    this.state.inputs.forEach((e) => (e.value = ""));
  }
  async handleOnSubmit(e) {
    e.preventDefault();
    try {
      const rawResponse = await fetch("/products/new", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.state),
      });
      const response = await rawResponse.json();
      alert(response);
      console.log(this.state.inputs);
      this.clearInputs();
    } catch (error) {
      alert(error);
    }
  }
  render() {
    return (
      <>
        <form maxWidth="md" noValidate onSubmit={this.handleOnSubmit}>
          <TextField
            error
            required
            id="standard-basic"
            label="Title"
            onChange={this.handleTitle}
          />
          <br /> <br />
          <TextField
            required
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rowsMax={8}
            onChange={this.handleDescription}
          />
          <br /> <br />
          <InputLabel required htmlFor="standard-adornment-amount">
            Price
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            onChange={this.handlePrice}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          <br /> <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </>
    );
  }
}
