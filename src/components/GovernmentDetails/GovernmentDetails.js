import React from 'react'

export default function GovernmentDetails() {
    const [g_adhar,setGAdhar]=React.useState(sessionStorage.getItem("g_adhar"))
    const [g_pan,setGPan]=React.useState(sessionStorage.getItem("g_pan"))
    const [g_pass,setGPass]=React.useState(sessionStorage.getItem("g_pass"))
    
  return (
    <div>
    <div className="row my-2">
      <h1>Government Details</h1>
    </div>
    <div className='row my-2'>
        <input type="text" placeholder='Adhar number'
        value={g_adhar}
        onChange={(e)=>{
            let t=e.target.value
            setGAdhar(t)
            sessionStorage.setItem("g_adhar",t)
        }}
        className='col form-control mx-2'/>
        <input type="text"   value={g_pan} 
         onChange={(e)=>{
            let t=e.target.value
            setGPan(t)
            sessionStorage.setItem("g_pan",t)
        }}
        placeholder='Pan Card' className='col form-control mx-2'/>
        <input type="text"  value={g_pass} 
            onChange={(e)=>{
                let t=e.target.value
                setGPass(t)
                sessionStorage.setItem("g_pass",t)
            }}
        placeholder='Passport' className='col form-control mx-2'/>
        
    </div>
    </div>
  )
}
