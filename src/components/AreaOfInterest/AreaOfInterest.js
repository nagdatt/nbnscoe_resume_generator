import React from 'react'

export default function AreaOfInterest() {
    const [areaOfInterest,setAreaOfInterest]=React.useState("")

    React.useEffect(()=>{
        sessionStorage.setItem("areaOfInterest",areaOfInterest)
    },[areaOfInterest])
  return (
    <div className='row my-2'>
        <h1 className='my-2 col'>
            Area of interest
            <textarea className='form-control col my-4' onChange={(e)=>setAreaOfInterest(e.target.value)}  placeholder='Area of Interest' />
        </h1>
    </div>
  )
}
