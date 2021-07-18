import React, { Component } from "react";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";

export class Form extends Component {
  state = {
    step: 1,
    linkedin: "",
    salary: "",
    native: "",
    other: "",
    notice: "",
    medical: "",
    driving: "",
    visa: "",
    certificate: "",
    locations: "",
    address: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;

    const {
      facebook,
      linkedin,
      salary,
      native,
      other,
      medical,
      driving,
      visa,
      certificate,
      locations,
      address,
    } = this.state;

    const values = {
      facebook,
      linkedin,
      salary,
      native,
      other,
      medical,
      driving,
      visa,
      certificate,
      locations,
      address,
    };

    switch (step) {
      case 1:
        return (
          <>
            <Form2
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values}
            />
          </>
        );
      case 2:
        return (
          <>
            <Form3
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values}
              prevStep={this.prevStep}
            />
          </>
        );

      case 3:
        return (
          <>
            <Form4
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values}
              prevStep={this.prevStep}
            />
          </>
        );

      case 4:
        return (
          <>
            <Form5
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values}
              prevStep={this.prevStep}
            />
          </>
        );
    }
  }
}

export default Form;
