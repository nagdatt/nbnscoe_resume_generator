import React from 'react'
import { fontSizeForResume } from '../staticDimentions'

export default function DisplayGovernmentDetails() {
  return (
    <>
    <tr>
        <td colSpan={2}><h6>
            Personal Details</h6></td>
    </tr>
    <tr>
        <td><h6>Employee Code</h6></td>
        <td style={{fontSize:fontSizeForResume}}><p>{localStorage.getItem("g_emp_code")}</p></td>
    </tr>
    <tr>
        <td><h6>Adhar Card Number</h6></td>
        <td style={{fontSize:fontSizeForResume}}><p>{localStorage.getItem("g_adhar")}</p></td>
    </tr>


    {
        localStorage.getItem("g_pan")!=null && localStorage.getItem("g_pass")!="" &&(
            <tr>
            <td><h6>Pan Card Number</h6></td>
            <td style={{fontSize:fontSizeForResume}}><p>{localStorage.getItem("g_pan")}</p></td>
        </tr>
        )
    }
     {
        localStorage.getItem("g_pass")!=null && localStorage.getItem("g_pass")!="" &&(
            <tr>
            <td><h6>Passport Number</h6></td>
            <td style={{fontSize:fontSizeForResume}}><p>{localStorage.getItem("g_pass")}</p></td>
        </tr>
        )
    }
    </>
  )
}
