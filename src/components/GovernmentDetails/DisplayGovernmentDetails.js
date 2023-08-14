import React from 'react'

export default function DisplayGovernmentDetails() {
  return (
    <>
    <tr>
        <td colSpan={2}><h6>
            Government Details</h6></td>
    </tr>
    <tr>
        <td><h6>Employee Code</h6></td>
        <td><p>{sessionStorage.getItem("g_emp_code")}</p></td>
    </tr>
    <tr>
        <td><h6>Adhar Card Number</h6></td>
        <td><p>{sessionStorage.getItem("g_adhar")}</p></td>
    </tr>


    {
        sessionStorage.getItem("g_pan")!=null && sessionStorage.getItem("g_pass")!="" &&(
            <tr>
            <td><h6>Pan Card Number</h6></td>
            <td><p>{sessionStorage.getItem("g_pan")}</p></td>
        </tr>
        )
    }
     {
        sessionStorage.getItem("g_pass")!=null && sessionStorage.getItem("g_pass")!="" &&(
            <tr>
            <td><h6>Passport Number</h6></td>
            <td><p>{sessionStorage.getItem("g_pass")}</p></td>
        </tr>
        )
    }
    </>
  )
}
