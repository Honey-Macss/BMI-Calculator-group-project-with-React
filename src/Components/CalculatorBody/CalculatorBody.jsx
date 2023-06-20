// Import Statements
import React, { useState } from "react";
import "./CalculatorBody.css";
import HeightAndWeight from "../HeightAndWeight/HeightAndWeight";
import HeiAndWeiEnglish from "../HeightAndWeight/HeiAndWeiEnglish";
import Button from "../Button/Button";
import healthy from "../Images/healthy.png"
import images from "../Images/images.png"
import overweight from "../Images/overweight.png"
import Underweight from "../Images/underweight.png"

const CalculatorBody = () => {
  // Declaring states.
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("00:0");

  const [heightCmError, setHeightCmError] = useState("");
  const [heightInError, setHeightInError] = useState("");

  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLb, setWeightLb] = useState("");

  const [image, setImage] = useState("")

  const [measurementValidity, setMeasurementValidity] = useState(true);

//   Handling Switch to Imperial system
  const handleImperialClick = () => {
    setMeasurementValidity(!measurementValidity);
    setHeightCm("");
    setWeightKg("");
    setMessage("");
    setBmi("00:0");
    setHeightCmError("");
    setHeightInError("");
    setImage("")
  };

//   Handling Switch to Metric system
  const handleMetriClick = () => {
    setMeasurementValidity(!measurementValidity);
    setHeightFt("");
    setHeightIn("");
    setWeightLb("");
    setMessage("");
    setBmi("00:0");
    setHeightCmError("");
    setHeightInError("");
    setImage("")
  };

//   Calculation formula for Metric system
  const calculationOne = (weightKg / (heightCm * heightCm)) * 10000;

  
//   Calculation formula for Imperial system
  const calcFt = parseInt(heightFt) * 12 + parseInt(heightIn);
  const calculationTwo = (parseInt(weightLb) / (calcFt * calcFt)) * 703;

//   Handling function to listen to event when the calculate button is clicked
  const handleBmiCalculation = (event) => {
    // prevent submitting
    event.preventDefault();

    // Handling updated BMI Calculation to be shown when calculate button is clicked
    measurementValidity
      ? setBmi(calculationOne.toFixed(1))
      : setBmi(calculationTwo.toFixed(1));

    //   Handling conditional statements for when calculate button is clicked
    if (calculationOne > 0 && calculationOne < 18.5) {
      setMessage("You are Underweight, Eat more!!!");
      setImage(Underweight)
    }
    if (calculationOne >= 18.5 && calculationOne < 24.9) {
      setMessage("You have a normal Weight, Keep it up!!!");
      setImage(healthy)
    }
    if (calculationOne >= 24.9 && calculationOne < 29.9) {
      setMessage("You are Overweight, start working out!!!");
      setImage(overweight)
    }
    if (calculationOne >= 30) {
      setMessage("You are Obese, hit the gym, ASAP!!!");
      setImage(images)
    } 

    if (heightCm === "" || heightCm <= 0 || weightKg === "" || weightKg <= 0) {
      setHeightCmError("Please, fill all values correctly");
    } else {
      setHeightCmError("");
    }

    if (calculationTwo > 0 && calculationTwo < 18.5) {
      setMessage("You are Underweight, Eat more!!!");
      setImage(Underweight)
    }
    if (calculationTwo >= 18.5 && calculationTwo < 24.9) {
      setMessage("You have a normal Weight, Keep it up!!!");
      setImage(healthy)
    }
    if (calculationTwo >= 24.9 && calculationTwo < 29.9) {
      setMessage("You are Overweight, start working out!!!");
      setImage(overweight)
    }
    if (calculationTwo >= 30) {
      setMessage("You are Obese, hit the gym, ASAP!!!");
      setImage(images)
    } 

    if (heightFt === "" || heightFt <= 0 || heightIn === "" || heightIn < 0 || weightLb === "" || weightLb <= 0 ) {
      setHeightInError("Please, fill all values correctly");
    } else {
      setHeightInError("");
    }
  };

  //   Handling function to listen to event when the Reset button is clicked
  const handleResetInput = (event) => {
    // prevent submitting for when the Reset button is clicked
    event.preventDefault();

    // Reseting the values to default for when the Reset button is clicked
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLb("");
    setBmi("00:0");
    setMessage("");
    setHeightCmError("");
    setHeightInError("");
    setImage(" ")
  };

  return (
    // Rendering of paragraphs to hold text and rendering imported components and passing props that hold their values 
    // and functions to be carried out when events occur
    <div className="divStyle">
      <form action="" className="calculatorBody">
      <h1 className="headerText">Body Mass Index Calculator</h1>
      <p style={{ color: "white", fontSize: "1.1rem", textAlign: "center" }}>
        If you have or think you might have an{" "}
        <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/" 
        target="blank" style={{color: "red"}}>eating disorder</a>
        , we advise you not to use the BMI Calculator and get further advice
        from your GP.</p>

    {/*Rendering of the Metric and Imperial components that show the height and Weight Inputs and Conditionally rendering
     them into the dom */}
      {measurementValidity ? 
      (<HeightAndWeight
          heightAndWeightError={heightCmError}
          heightChangeCm={(e) => setHeightCm(e.target.value)}
          weightChangeKg={(e) => setWeightKg(e.target.value)}
          heightValue={heightCm}
          weightValue={weightKg}
          imperialChange={handleImperialClick} />) :
      (<HeiAndWeiEnglish
          heightAndWeightError={heightInError}
          heightChangeFt={(e) => setHeightFt(e.target.value)}
          heightChangeIn={(e) => setHeightIn(e.target.value)}
          weightChangeLb={(e) => setWeightLb(e.target.value)}
          heightValueFt={heightFt}
          heightValueIn={heightIn}
          weightValueLb={weightLb}
          metricChange={handleMetriClick}/> )}

        {/* Button component rendering */}
      <Button calculateBmi={handleBmiCalculation} resetInput={handleResetInput} />

      <p className="result">Your BMI is: <div className="resultBox">{bmi}</div></p>
      <p className="result">{message}</p>
      <p className="courtesy">Courtesy: Team C-Drive</p>
    </form>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default CalculatorBody;
