import React from 'react'

export default function AreaOfInterest() {
    const [areaOfInterest,setAreaOfInterest]=React.useState("")

    React.useEffect(()=>{
    },[areaOfInterest])
  return (
    <div className='row my-2'>
      
        <h6 className='my-2 col'>
            Area of Interest <br/>
            <small className="col " style={{ color: "red" }}>
       
        ("$" is considered as new bullet point)
      </small>
            <textarea className='form-control col my-4' 
            value={localStorage.getItem("areaOfInterest")}
            onChange={(e)=> {setAreaOfInterest(e.target.value)
            localStorage.setItem("areaOfInterest",e.target.value)
            }
}  placeholder='Area of Interest' />
        </h6>
    </div>
  )
}
