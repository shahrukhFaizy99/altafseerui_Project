import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";

export class Form2 extends Component {
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
            <div className="form-group">
              <label htmlFor="notice">
                Notice period <span class="required-mark">*</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>select</option>
                <option value="1">Arabic </option>
                <option value="2">English</option>
                <option value="3">Spanish</option>
                <option value="4">Russian</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="medical">
                Medical conditions <span class="required-mark">*</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>select</option>
                <option value="1">Arabic </option>
                <option value="2">English</option>
                <option value="3">Spanish</option>
                <option value="4">Russian</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="driving">
                Driving license <span class="required-mark">*</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>select</option>
                <option value="1">Arabic </option>
                <option value="2">English</option>
                <option value="3">Spanish</option>
                <option value="4">Russian</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="visa">
                Visa status
                <span class="required-mark">*</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>select</option>
                <option value="1">Arabic</option>
                <option value="2">English</option>
                <option value="3">Spanish</option>
                <option value="4">Russian</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="certificate">
                Do you clear police certificate?
                <span class="required-mark">*</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>select</option>
                <option value="1">Arabic</option>
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

export default Form2;
