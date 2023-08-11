import React from 'react'

export default function DisplayEducationalDetails() {
    const [EducationalDetails,setEducationalDetails]=React.useState(sessionStorage.getItem("educationalDetails"))
 
    return (
   <>
   <tr >
    <td style={{ width: "20%" }}>
        <h6>Educational Details</h6>
    </td>
    <td >
      <ul className='mx-2'>
       <p >{EducationalDetails?.split("-").map((e)=>{
          if(e!="")
          return <li>{e}</li>
          return ""
       })}</p>

</ul>
    </td>
   </tr>
   
   </>
  )
}
