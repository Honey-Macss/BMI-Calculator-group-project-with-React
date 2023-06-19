import React from "react";
import "./AgeInput.css";

const AgeInput = (prop) => {
  return (
    <div className="ageInput">
      <label for="age">Age</label>
      <input type="number" value={prop.ageValue} onChange={prop.changeAge} />
      <span className="generalError">{prop.errorMessage}</span>
    </div>
  );
};

export default AgeInput;
