import React from 'react'

export default function SubjectsHandled() {
    const [ug,setUg]=React.useState("")
    const [pg,setPg]=React.useState("")
    React.useEffect(()=>{
        sessionStorage.setItem("ug",ug)
        sessionStorage.setItem("pg",pg)
    })
  return (
    <div className='row my-2'>
        <h1 className='my-2 col'>
           Subjects Handled
            <textarea className='form-control col my-4' onChange={(e)=>setUg(e.target.value)}  placeholder='UG' />
            <textarea className='form-control col my-4' onChange={(e)=>setPg(e.target.value)}  placeholder='PG' />

        </h1>
    </div>
  )
}
