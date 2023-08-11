import React from 'react'

export default function DisplayAreaOfInterest() {
    const [areaOfInterest,setAreaOfInterest]=React.useState(sessionStorage.getItem("areaOfInterest"))
 
    return (
   <>
   <tr>
    <td >
        <h6>Area Of Interest</h6>
    </td>
    <td >
       <p>{areaOfInterest}</p>
    </td>
   </tr>
   
   </>
  )
}
