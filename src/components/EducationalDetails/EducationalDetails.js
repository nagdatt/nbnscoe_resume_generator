import React from 'react'

export default function EducationalDetails() {
    const [EducationalDetails,setEducationalDetails]=React.useState("")

    React.useEffect(()=>{
    },[EducationalDetails])
  return (
    <div className=' my-2'>

        <h1 className='my-2 row'>
        Educational Details </h1>
        <h6>
        Educational Details (seperated by "-")
        </h6>
            <textarea className='form-control row my-4' 
            value={sessionStorage.getItem("educationalDetails")}
            onChange={(e)=> {setEducationalDetails(e.target.value)
            sessionStorage.setItem("educationalDetails",e.target.value)
            }
}  placeholder='Educational details' />
       
    </div>
  )
}
