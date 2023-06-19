import React, {useState} from 'react'
import "./CalculatorBody.css"
import AgeInput from '../AgeInput/AgeInput'
import HeightAndWeight from '../HeightAndWeight/HeightAndWeight'
import HeiAndWeiEnglish from '../HeightAndWeight/HeiAndWeiEnglish'
import Button from '../Button/Button'


const CalculatorBody = () => {
    // Declaring states. 
    const [message, setMessage] = useState("")
    const [bmi, setBmi] = useState("00:0")

    const [age, setAge] = useState("")
    const [ageError, setAgeError] = useState("")

    const [heightCmError, setHeightCmError] = useState("")
    const [heightInError, setHeightInError] = useState("In")

    const [heightCm, setHeightCm] = useState("")
    const [weightKg, setWeightKg] = useState("")
    
    const [heightFt, setHeightFt] = useState("")
    const [heightIn, setHeightIn] = useState("")
    const [weightLb, setWeightLb] = useState("")

    const [measurementValidity, setMeasurementValidity] = useState(true)
    const handleImperialClick = () => {
        setMeasurementValidity(!measurementValidity)
        setHeightCm("")
        setWeightKg("")
        setMessage("")
        setBmi("00:0")
        setHeightCmError("")
        setHeightInError("")
    }
    const handleMetriClick = () => {
        setMeasurementValidity(!measurementValidity)
        setHeightFt("")
        setHeightIn("")
        setWeightLb("")
        setMessage("")
        setBmi("00:0")
        setHeightCmError("")
        setHeightInError("")
    }

    const calculationOne = (weightKg / (heightCm * heightCm) * 10000)

    const calcFt = ((parseInt(heightFt) * 12) + parseInt(heightIn))
    const calculationTwo = (parseInt(weightLb) / (calcFt * calcFt) * 703)

    const [cmAndKgStatus, setCmAndKgStatus] = useState(false)
    const [ftAndlbStatus, setFtAndlbStatus] = useState(false)


    const handleBmiCalculation = (event) => {
        // prevent submitting
        event.preventDefault()

        measurementValidity ? 
        setBmi(calculationOne.toFixed(1)):
        setBmi(calculationTwo.toFixed(1)) 

        if (heightCm === "" || heightCm <= 0 || weightKg === "" || weightKg <= 0 ) {
            setHeightCmError("Please, fill all values correctly")
        } else {
            setHeightCmError("")
            setCmAndKgStatus(true)
        }

        if (heightFt === "" || heightFt <= 0 || heightIn === "" || heightIn <= 0 || weightLb === "" || weightLb <= 0 ) {
            setHeightInError("Please, fill all values correctly")
        } else {
            setHeightInError("")
            setFtAndlbStatus(true)
        }

        // if (age === "" || age <= 0) {
        //     setAgeError("Please fill all values correctly")
        // } else {
        //     setCmAndKgStatus(true)
        // }

        // if (cmAndKgStatus) {
            if (calculationOne > 0 && calculationOne < 18.5 ) {
                setMessage("You are Underweight, Eat more!!!")
            } else if (calculationOne >= 18.5 && calculationOne < 24.9){
                setMessage("You have a normal Weight, Keep it up!!!")
            } else if(calculationOne >= 24.9 && calculationOne < 29.9) {
                setMessage("You are Overweight, start working out!!!")
            } else if (calculationOne >= 30) {
                setMessage("You are Obese, hit the gym!!!")
            }
        // } 

        // if (ftAndlbStatus) {
            if (calculationTwo > 0 && calculationTwo < 18.5 ) {
                setMessage("You are Underweight, Eat more!!!")
            } else if (calculationTwo >= 18.5 && calculationTwo < 24.9){
                setMessage("You have a normal Weight, Keep it up!!!")
            } else if(calculationTwo >= 24.9 && calculationTwo < 29.9) {
                setMessage("You are Overweight, start working out!!!")
            } else if (calculationTwo >= 30) {
                setMessage("You are Obese, hit the gym!!!")
            }
        // } 

    }
    
    const handleResetInput =(event) => {
        // prevent submitting
        event.preventDefault()
        setHeightCm("")
        setWeightKg("")
        setHeightFt("")
        setHeightIn("")
        setWeightLb("")
        setAge("")
        setBmi("00:0")
        setMessage("")
        setHeightCmError("")
        setAgeError("")
    }
    

return (
         
                
                <form action="" className='calculatorBody'>
                <h1 className='headerText'>Body Mass Index Calculator</h1>
                    <p style={{color: "white", fontSize: "1.2rem", textAlign: "center"}}>If you have or think you might have an <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/" target='blank'>eating disorder</a>, 
                        we advise you not to use the BMI Calculator and get further advice from your GP.</p>
                    
                    <AgeInput ageValue={age} changeAge={(e) => setAge(e.target.value)} errorMessage={ageError} />

                    {measurementValidity ? 
                    <HeightAndWeight heightAndWeightError={heightCmError} heightChangeCm={(e) => setHeightCm(e.target.value)} weightChangeKg={(e) => setWeightKg(e.target.value)} heightValue={heightCm} weightValue={weightKg} imperialChange={handleImperialClick} onChange={handleBmiCalculation}/> :
                    <HeiAndWeiEnglish heightAndWeightError={heightInError} heightChangeFt={(e) => setHeightFt(e.target.value)} heightChangeIn={(e) => setHeightIn(e.target.value)} weightChangeLb={(e) => setWeightLb(e.target.value)} heightValueFt={heightFt} heightValueIn={heightIn} weightValueLb={weightLb}  metricChange={handleMetriClick} onChange={handleBmiCalculation}/>}
                    <Button calculateBmi={handleBmiCalculation} resetInput={handleResetInput}/>

                    <p className='result'>Your BMI is: <div className='resultBox'>{bmi}</div></p>
                    
                    <p className='result'>{message}</p>
                    <p className='courtesy'>Courtesy: Team C-Drive</p>
                </form>
           

)
}

export default CalculatorBody