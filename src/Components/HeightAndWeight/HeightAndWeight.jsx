// Import statement
import "./HeightAndWeight.css"

const HeightAndWeight = (prop) => {
      return (
    <div className='heightAndweight'>
        {/* Creation of Inputs and Labels with values and functions passed in through props from the parent tag, Events */}
        <div className='heiAndWeiLabel feetStyle' >( <p className='underlined'>Metric</p> | <p className="notUnderlined" onClick={prop.imperialChange}>Imperial</p>  )</div>
        <span className='heightAndWeightSpan'>
            <span className='heightDisplay'>
                <label className='heiAndWeiLabel' for="">Height: <p style={{fontSize: "1.2rem", opacity: "70%"}}>Centimeters</p></label>
                <input className='heiAndWeiInput' placeholder='cm' type="number" value={prop.heightValue} onChange={prop.heightChangeCm} />
            </span>

            <span className='heightDisplay'>
                <label className='heiAndWeiLabel' for="">Weight: <p style={{fontSize: "1.2rem", opacity: "70%"}}>Kilograms</p></label>
                <input className='heiAndWeiInput' placeholder='kg' type="number" value={prop.weightValue} onChange={prop.weightChangeKg} />
            </span>
        </span>
        <span className="generalError">{prop.heightAndWeightError}</span>
    </div>
  )
}

export default HeightAndWeight