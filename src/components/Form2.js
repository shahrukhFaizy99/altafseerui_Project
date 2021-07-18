import React, { Component } from "react";

export class Form2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;
    return (
      <>
        <div className="form-container">
          <div className="image-wrap">
            <img src="/images/logo.PNG" />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">Facebook profile link</label>
            <input
              type="text"
              className="form-control"
              name="facebook"
              onChange={inputChange("facebook")}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">Linkedin profile link</label>
            <input
              type="text"
              className="form-control"
              name="linkedin"
              onChange={inputChange("linkedin")}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="salary">
              Minimum monthly salary in AED <span class="required-mark">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="salary"
              onChange={inputChange("salary")}
              required
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="native">
              Native language <span class="required-mark">*</span>
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
            <label htmlFor="other">
              Other language <span class="required-mark">*</span>
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
