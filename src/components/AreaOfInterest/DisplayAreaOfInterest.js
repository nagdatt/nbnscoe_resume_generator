import React from 'react'
import { fontSizeForResume } from '../staticDimentions'

export default function DisplayAreaOfInterest() {
    const [areaOfInterest,setAreaOfInterest]=React.useState(localStorage.getItem("areaOfInterest"))
    
    return (
   <>
   <tr>
    <td >
        <h6>Area Of Interest</h6>
    </td>
    <td style={{fontSize:fontSizeForResume}}>

        
       <p>{areaOfInterest?.split("$").map((ele)=>{
        if (ele!="")
        return <li>{ele}</li>
        return ""
       })}</p>
    </td>
   </tr>
   
   </>
  )
}
