import React from "react";
import { fontSizeForResume } from "../staticDimentions";

export default function DisplaySubjectHandled() {
  const [ug, setUg] = React.useState("");
  const [pg, setPg] = React.useState("");
  React.useEffect(() => {
    console.log(localStorage.getItem("ug"));
    setUg(localStorage.getItem("ug"));
    setPg(localStorage.getItem("pg"));
  });
  return (
    <>
      {(ug != "" || pg != "") && (ug != null || pg != null) ? (
        <>
          <tr>
            <td colSpan={2}>
              <h6>Subjects Handled</h6>
            </td>
          </tr>
          {ug == "" || ug == null ? (
            ""
          ) : (
            <tr>
              <td >
                <h6>UG</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
               

                <p>{ug?.split("$").map((ele)=>{
        if (ele!="")
        return <li>{ele}</li>
        return ""
       })}</p>
              </td>
            </tr>
          )}
          {pg == "" || pg == null ? (
            ""
          ) : (
            <tr>
              <td >
                <h6>PG</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
              <p>{pg?.split("$").map((ele)=>{
        if (ele!="")
        return <li>{ele}</li>
        return ""
       })}</p>
              </td>
            </tr>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
