import React from "react";
import logo from "./../../images/left_icon.jpg";
export default function IndexHeader() {
  return (
    <>
    
        <div colSpan={2} style={{padding:"10px"}}>

          <div className="row">
            <div className="col-2 text-center" >
              <img src="./left_icon.jpg"   width={"100px"}
                height={"100px"} />
            </div>

            <div
              className="col "
              style={{ textAlign: "center" }}
            >
              <div className="row g-1">
                <p style={{ fontFamily: "Times New Roman",marginBottom:"-1px" }}>
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
                    marginBottom:"-1px" 
                  }}
                >
                  N B NAVALE SINHGAD COLLEGE OF ENGINEERING
                </h5>
              </div>
              <div className="row g-1">
                <p style={{ fontFamily: "Times New Roman" }}>
                  <b>
                    <i>
                      (Approved by AICTE & Affiliated to P. A. H. Solapur University,
                      Solapur)
                    </i>
                  </b>
                </p>
              </div>
              <div className="row g-1">
                <p style={{ fontFamily: "Times New Roman" }}>
                  <b>
                    <u>
                    CURRICULAM VITAE
                    </u>
                  </b>
                </p>
              </div>
              <div className="row g-1">
                <p style={{ fontFamily: "Times New Roman" }}>
                  <b>
                    <u>
                   Resume Generator
                    </u>
                  </b>
                </p>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
                src="./right_icon.png"
                width={"70px"}
                height={"90px"}
               
              />
            </div>
           
          </div>
        
        </div>
     
    </>
  );
}
