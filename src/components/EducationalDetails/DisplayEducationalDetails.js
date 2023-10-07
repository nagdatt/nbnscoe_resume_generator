import React from "react";
import { fontSizeForResume } from "../staticDimentions";
export default function DisplayEducationalDetails() {
  const [educationalDetails, setEducationalDetails] = React.useState(
    JSON.parse(localStorage.getItem("multiEducationDetails"))
  );

  return (
    <>
      <tr style={{fontSize:fontSizeForResume}}>
        <td style={{ width: "20%" }}>
          <h6>Educational Details</h6>
        </td>
        <td>
          <table style={{width:"100%"}}>
            <tr>
              <th style={{textAlign:"center"}}>Institute / University Name</th>
              <th style={{width:"10%",textAlign:"center"}}>Passedout Year</th>
              <th style={{textAlign:"center"}}>Degree</th>
              <th style={{textAlign:"center"}}>Remark</th>
            </tr>
{
  educationalDetails!=null && educationalDetails?.map((element, id) => {
    return (
      <tr>
        <td>
        {element.institute}
        </td>
        <td>
        {element.to}
        </td>
      
        <td>
        {element.degree}
        </td>
        <td>
        {element.remark}
        </td>
      
      </tr>
   )
   }
  )
   
}
            
          </table>
        </td>
        {/* <td style={{ padding: "2px" }}>
          {educationalDetails!=null && educationalDetails?.map((element, id) => {
            return (
              <>
                <div className="row">
                  <div className="col-12 mb-0">
                    {element.institute && (
                      <p className="mb-0">
                        <strong>Institute:</strong> {element.institute}
                      </p>
                    )}
                  </div>
                  <div className="col-12 mb-0">
                    {element.university && (
                      <p className="mb-0">
                        <strong>University:</strong> {element.university}
                      </p>
                    )}
                  </div>
                  <div className="col-auto mb-0">
                    {element.from && element.to && (
                      <p className="mb-0">
                        <strong>Attained:</strong> {element.from} To{" "}
                        {element.to}
                      </p>
                    )}
                  </div>
                  <div className="col-auto">
                    {element.degree && (
                      <p className="mb-0">
                        <strong>Degree:</strong> {element.degree}
                      </p>
                    )}
                  </div>
                  <div className="col-12">
                    {element.remark && (
                      <p className="mb-0">
                        <strong>Remark:</strong> {element.remark}
                      </p>
                    )}
                  </div>
                </div>
                {educationalDetails!=null ? (educationalDetails?.length - 1 != id && (
                  <hr
                    style={{ margin: "-2px", borderTop: "1px dashed  black" }}
                  />
                )):""}
              </>
            );
          })}
        </td> */}
      </tr>
    </>
  );
}
