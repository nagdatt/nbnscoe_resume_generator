import React from 'react'

export default function SubjectsHandled() {
    const [ug,setUg]=React.useState("")
    const [pg,setPg]=React.useState("")
    React.useEffect(()=>{
     
    },[ug,pg])
  return (
    <div className='row my-2'>
        <h1 className='my-2 col'>
           Subjects Handled
            <textarea className='form-control col my-4'
            value={sessionStorage.getItem("ug")}
            onChange={(e)=>{setUg(e.target.value)
              sessionStorage.setItem("ug",e.target.value)
            }}  placeholder='UG' />
            <textarea
              value={sessionStorage.getItem("pg")}
            className='form-control col my-4' onChange={(e)=>{
              
              sessionStorage.setItem("pg",e.target.value)
              setPg(e.target.value)}}  placeholder='PG' />

        </h1>
    </div>
  )
}
