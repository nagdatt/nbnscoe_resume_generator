import React from 'react'

export default function AreaOfInterest() {
    const [areaOfInterest,setAreaOfInterest]=React.useState("")

    React.useEffect(()=>{
    },[areaOfInterest])
  return (
    <div className='row my-2'>
        <h1 className='my-2 col'>
            Area of interest
            <textarea className='form-control col my-4' 
            value={sessionStorage.getItem("areaOfInterest")}
            onChange={(e)=> {setAreaOfInterest(e.target.value)
            sessionStorage.setItem("areaOfInterest",e.target.value)
            }
}  placeholder='Area of Interest' />
        </h1>
    </div>
  )
}
