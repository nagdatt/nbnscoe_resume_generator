import React from "react";
import logo from "./../../images/left_icon.jpg";
export default function Header() {
  return (
    <>
    
        <td colSpan={2}>
          <div className="row">
            <div className="col-1" style={{ marginTop: "10px" ,marginRight:"30px"}}>
              <img src="./left_icon.jpg" width={"70px"} height={"70px"} />
            </div>
            <div
              className="col-9"
              style={{ textAlign: "center" }}
            >
              <div className="row g-1">
                <p style={{ fontFamily: "Times New Roman",marginBottom:"-4px" }}>
                  {" "}
                  Savitribai Phule Shikshan Prasarak Mandal’s
                </p>
              </div>
              <div className="row g-1">
                <h5
                  style={{
                    color: "red",
                    fontFamily: "Times New Roman",
                    fontSizeAdjust: "0.58",
                    marginBottom:"-4px" 
                  }}
                >
                  N B NAVALE SINHGAD COLLEGE OF ENGINEERING
                </h5>
              </div>
              <div className="row g-1">
                <p style={{ fontFamily: "Times New Roman" }}>
                  <b>
                    <i>
                      (Approved by AICTE & Affiliated to Solapur University,
                      Solapur)
                    </i>
                  </b>
                </p>
              </div>
            </div>
            <div className="col-1">
              <img
                src="./right_icon.png"
                width={"70px"}
                height={"70px"}
                style={{ marginTop: "9px" ,marginLeft:"-5px"}}
              />
            </div>
          </div>
        </td>
     
    </>
  );
}
