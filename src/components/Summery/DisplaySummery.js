import React from 'react'
import { fontSizeForResume } from '../staticDimentions'

export default function DisplaySummery() {
    const [summery,setSummery]=React.useState(localStorage.getItem("summery"))
 
    return (
   <>
   {
    summery && summery!=null && (<tr>
        <td >
            <h6>Profile Summary</h6>
        </td>
        <td style={{fontSize:fontSizeForResume}}>
           


           <p>{summery?.split("$").map((ele)=>{
        if (ele!="")
        return <li>{ele}</li>
        return ""
       })}</p>
        </td>
       </tr>)
   }
   
   </>
  )
}
