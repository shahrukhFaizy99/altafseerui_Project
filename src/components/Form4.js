import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";

export class Form3 extends Component {
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
        <div className="form-container back-button">
          <div className="image-wrap">
            <img src="/images/logo.PNG" />
          </div>
          <div className="backArrow">
            <MdArrowBack onClick={this.Back} />
          </div>
          <div className="wrap-back-button">
            <div className="form-group4">
              <label htmlFor="locations">
                Desired locations to work in<span class="required-mark">*</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>12 Locations Selected</option>
                <option value="1">Arabic </option>
                <option value="2">English</option>
                <option value="3">Spanish</option>
                <option value="4">Russian</option>
              </select>
            </div>
          </div>

          <br />
          <div className="text-right">
            <button className="btn" onClick={this.continue}>
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Form3;
