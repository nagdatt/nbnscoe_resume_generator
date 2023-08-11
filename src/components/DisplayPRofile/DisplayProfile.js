import React from "react";

export default function DisplayProfile(props) {
  const data = props.data;

  return (
    <>
      <tr>
        <td>
          <div >
            <div style={{ textAlign: "center" }}>
              <img
                width="100px"
                height="100px"
                style={{ borderRadius: "50%" }}
                src={sessionStorage.getItem("dp")}
              />
            </div>
            
          </div>
        </td>
        <td>
        <div className="col">
           
           <h5>
             {data?.selectedSalutations}{" "}
             {sessionStorage.getItem("first_name")}{" "}
             {sessionStorage.getItem("middle_name")}{" "}
             {sessionStorage.getItem("last_name")}{" "}
           </h5>
         
         <div className="row">
         <h6 className="col-auto">
           
           {sessionStorage.getItem("designation")},
         
         </h6>
         <h6 className="col-3">
         {sessionStorage.getItem("qualification")}
         </h6>
         </div>

         <div className="row">
         <h6 style={{ color: "blue" }} className="col-auto">
           {" "}
           ✉️ <b>{sessionStorage.getItem("email")}</b>
         </h6>
         <h6 style={{ color: "red" }} className="col">
           {" "}
           📞 <b>{sessionStorage.getItem("contact")}</b>
         </h6>
         </div>
       </div>
        </td>
      </tr>
    </>
  );
}
