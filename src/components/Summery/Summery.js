import React from 'react'

export default function Summery() {
    const [summery,setSummery]=React.useState(localStorage.getItem("summery"))

    React.useEffect(()=>{
    },[summery])
  return (
    <div className='row my-2'>
        <h6 className='my-2 col'>
            Profile Summary
            <br/>
            <small className="col " style={{ color: "red" }}>
       
        ("$" is considered as new bullet point)
      </small>
            <textarea className='form-control col my-4' 
            value={summery}
            onChange={(e)=> {setSummery(e.target.value)
            localStorage.setItem("summery",e.target.value)
            }
}  placeholder='Profile Summary' />
        </h6>
    </div>
  )
}
