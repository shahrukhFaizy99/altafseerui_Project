import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";
import GoogleMap from "./GoogleMap";
export class Form4 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  Back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;
    return (
      <>
        <div className="form-container">
          <div className="image-wrap">
            <img src="/images/logo.PNG" />
          </div>
          <div className="backArrow">
            <MdArrowBack onClick={this.Back} />
          </div>
          <div className="wrap-back-button">
            <div className="form-group5">
              <label htmlFor="address">
                Your current address <span class="required-mark">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Country picker"
                onChange={inputChange("address")}
              ></input>
            </div>
            <div className="google-map">
            <GoogleMap/>
            </div>
          </div>
          <br />
          <div className="text-right">
            <button className="btn map-button">Complete Registration</button>
          </div>
        </div>
      </>
    );
  }
}

export default Form4;
