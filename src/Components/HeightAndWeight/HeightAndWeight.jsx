import "./HeightAndWeight.css"

const HeightAndWeight = (prop) => {
      return (
    <div className='heightAndweight'>
        <div className='heiAndWeiLabel feetStyle' >(<p className='underlined' onClick={prop.imperialChange}>Imperial</p> | <p>Metric</p> )</div>
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