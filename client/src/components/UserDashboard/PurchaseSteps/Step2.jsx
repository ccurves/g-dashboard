import React from "react";

const Step2 = ({ handleChange }) => {
  return (
    <div data-kt-stepper-element="content">
      <div className="w-100">
        <div className="fv-row mb-10">
          <label className="required fs-5 fw-bold mb-2">
            Select Unit Amount
          </label>

          <select
            name="dbname"
            className="form-select form-select-solid"
            data-placeholder="Units"
            onChange={handleChange("units")}
          >
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step2;
