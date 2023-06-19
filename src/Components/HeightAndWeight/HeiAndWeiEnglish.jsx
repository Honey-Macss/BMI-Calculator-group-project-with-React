import "./HeightAndWeight.css"

const HeiAndWeiEnglish = (prop) => {

  return (
    <div className='heightAndweight'>
    <div className='heiAndWeiLabel feetStyle' >(<p>Imperial</p> | <p onClick={prop.metricChange} className='underlined'>Metric</p> )</div>
        <span className='heightAndWeightSpan'>
            <span className='heightDisplay' >
                <label className='heiAndWeiLabel' for="">Height: <p style={{fontSize: "1.2rem", opacity: "70%"}}>Feet/Inches</p></label>
                <span className='feetStyle'>
                <input className='heiAndWeiInput' placeholder='ft' type="number" value={prop.heightValueFt} onChange={prop.heightChangeFt} />
                <input className='heiAndWeiInput' placeholder='inch' type="number" value={prop.heightValueIn} onChange={prop.heightChangeIn}/>
                </span>
            </span>

            <span className='heightDisplay'>
                <label className='heiAndWeiLabel' for="">Weight: <p style={{fontSize: "1.2rem", opacity: "70%"}}>Pounds</p></label>
                <input className='heiAndWeiInput' placeholder='lbs' type="number" value={prop.weightValueLb} onChange={prop.weightChangeLb} />
            </span>
        </span>
        <span className="generalError">{prop.heightAndWeightError}</span>
    </div>
  )
}

export default HeiAndWeiEnglish