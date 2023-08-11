import React from 'react'

export default function MoocComponentUI(props) {

  const[ title,setTitle]=React.useState("")
  const[ organized,setOrganized]=React.useState("")
  const[ from,setFrom]=React.useState("")
  const[ to,setTo]=React.useState("")
  const[ duration,setDuration]=React.useState("")
  const [object,setObject]=React.useState({})
  React.useEffect(()=>{
    setObject({
      title:title,
      organized:organized,
      from:from,
      to:to,
      duration:duration
    })
  },[title,organized,from,to,duration])

  React.useEffect(()=>{

    const obj=props.mooc
    obj[props.id]=object
    props.setMOOC(obj)
sessionStorage.setItem("mooc",JSON.stringify(obj))
  },[object])
  return (
    <div className="row my-2" >
        <input type='text ' className='col form-control mx-2' onChange={(e)=>setTitle(e.target.value)} placeholder='Course Title' />
       
       From: <input  className='col form-control mx-2' onChange={(e)=>setFrom(e.target.value)}  type='date'/>
        To : <input  className='col form-control mx-2' onChange={(e)=>setTo(e.target.value)} type='date'/>
        <input  className='col form-control mx-2' onChange={(e)=>setDuration(e.target.value)} type='text'  placeholder='Duration in Days / weeks'/>
        
    </div>
  )
}
