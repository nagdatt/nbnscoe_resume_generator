import React from 'react'

export default function DisplaySubjectHandled() {

    const [ug,setUg]=React.useState("")
    const [pg,setPg]=React.useState("")
    React.useEffect(()=>{
        console.log( sessionStorage.getItem("ug"))
        setUg( sessionStorage.getItem("ug"))
        setPg (sessionStorage.getItem("pg"))
    })
  return (
    <>
    {
       ( (ug!=""  || pg!="") &&( ug!=null  || pg!=null))?(

        <>
        
        <tr>
    <td colSpan={2}>
        <h6>Subjects Handled</h6>
    </td>
    
   </tr>
  {
    ug=="" || ug==null?(
        ""
    ):(
        <tr>
            <td>
                <h6>
                    UG
                </h6>
            </td>
            <td>
                <p>{ug}</p>
            </td>
        </tr>
    )
  }
   {
    pg==""|| pg==null?(
       ""
    ):(
        <tr>
        <td>
            <h6>
                PG
            </h6>
        </td>
        <td>
           <p> {pg}</p>
        </td>
    </tr>
    )
  }
        </>
       ):""
    }
    </>
  )
}
