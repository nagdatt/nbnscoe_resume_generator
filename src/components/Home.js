import React from "react";
import { Link } from "react-router-dom";
import FDPComponentUI from "./FDPComponent/FDPComponentUI";
import Experience from "./ExperienceComponent/Experience";
import AreaOfInterest from "./AreaOfInterest/AreaOfInterest";
import SubjectsHandled from "./SubjectsHandled/SubjectsHandled";
import ResearchGuidence from "./ResearchGuidence/ResearchGuidence";
import MoocComponentUI from "./MoocComponent/MoocComponentUI";
import Others from "./Others/Others";
import EducationalDetails from "./EducationalDetails/EducationalDetails";
import GovernmentDetails from "./GovernmentDetails/GovernmentDetails";
import Header from "./Header/Header";
import IndexHeader from "./Header/IndexHeader";
const N = 100;
export default function Home() {
  const [name, setName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const salutations = ["Mr.", "Mrs.", "Dr.", "Er.", "Bsc."];
  const [selectedSalutations, setSelectedSalutations] = React.useState(
    salutations[0]
  );
  const [fdpCount, setSelectedFdpCount] = React.useState(0);
  const [moocCount, setSelectedMOOCCount] = React.useState(0);

  const [designation, setDesignation] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");

  const [fdp, setFDP] = React.useState({});
  const [mooc, setMOOC] = React.useState({});

  return (
    <div>
      {/* <div className="container  my-2" style={{width: "100%" }}>
      
        <Header/>
     
      </div> */}
      <div className="container card  my-2" >
      
       <div className="row"> <IndexHeader/></div>
     
      </div> 
      
      {/* <div className="container  my-2">
        <Link
          to={`/resume`}
          state={{
            name: name,
            middleName: middleName,
            lastName: lastName,
            selectedSalutations: selectedSalutations,
            qualification: qualification,
            designation: designation,
            email: email,
            fdp: fdp,
          }}
          className="btn btn-danger"
          style={{width:"100%"}}

        >
        GENERATE PDF
        </Link>
      </div> */}
      <div className="container card p-4">
        {/* First Row */}

        <div className="row my-2">
          <h1>Basic Information</h1>

          <select
            name="salutations"
            className="form-control col mx-2"
            id="salutations"
            onChange={(e) => setSelectedSalutations(e.target.value)}
          >
            <option>Salutation (Default- Mr.)</option>
            {salutations.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>

          <input
            type="text"
            className="form-control col mx-2"
            placeholder="First Name"
            value={sessionStorage.getItem("first_name")}
            onChange={(e) => {
              sessionStorage.setItem("first_name", e.target.value);
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Middle Name"
            value={sessionStorage.getItem("middle_name")}
            onChange={(e) => {
              sessionStorage.setItem("middle_name", e.target.value);

              setMiddleName(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Last Name"
            value={sessionStorage.getItem("last_name")}
            onChange={(e) => {
              sessionStorage.setItem("last_name", e.target.value);

              setLastName(e.target.value);
            }}
          />
        </div>

        <div className="row my-2">
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Designation"
            value={sessionStorage.getItem("designation")}
            onChange={(e) => {
              sessionStorage.setItem("designation", e.target.value);

              setDesignation(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Qualification"
            value={sessionStorage.getItem("qualification")}
            onChange={(e) => {
              sessionStorage.setItem("qualification", e.target.value);

              setQualification(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Email"
            value={sessionStorage.getItem("email")}
            onChange={(e) => {
              sessionStorage.setItem("email", e.target.value);

              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="row my-2">
          <div className="col-3">
          <input
            type="text"
            className="form-control col "
            placeholder="Contact No."
            value={sessionStorage.getItem("contact")}
            onChange={(e) => {
              sessionStorage.setItem("contact", e.target.value);

              setContactNo(e.target.value);
            }}
           
          />
          </div>
          <div className="col-3" style={{textAlign:"end"}}>
            <h6>Select Profile Image</h6>
          </div>
          <div className="col">
            <input
              type="file"
              accpet="image/*"
              onChange={(e) => {
                sessionStorage.setItem(
                  "dp",
                  URL.createObjectURL(e.target.files[0])
                );
              }}
              className="form-control "
              placeholder="Select Profile Image"
            />
          </div>
        </div>
      </div>

      {/* Educational Details */}
      <div className="container card my-2 p-4">
        <EducationalDetails />
      </div>
      {/* End Educational Details */}
      {/* Experience */}
      <div className="container card my-2 p-4">
        <Experience />
      </div>
      {/* End Experience */}

      {/* Area of Interest */}
      <div className="container card my-2 p-4">
        <AreaOfInterest />
      </div>
      <div className="container card my-2 p-4">
        <SubjectsHandled />
      </div>
      {/* End Area of Interest */}

      {/* Research And Guidence */}
      <div className="container card my-2 p-4">
        <ResearchGuidence />
      </div>
      {/* End of Reasearch And Guidence */}

      <div className="container card my-2 p-4">
        <div className="row my-2">
          <h1>Training and certifications</h1>
        </div>
        {/* FDP */}
        <div className="row my-2">
          <h6 className="col-9 mx-2">
            Total Number of FDP/STTP/Workshop Attended
          </h6>
          <select
            name="FdpCount"
            id="FdpCount"
            class="form-select col mx-2"
            onClick={(e) => {
              console.log(e.target.value);
              setSelectedFdpCount(parseInt(e.target.value));
              if (parseInt(e.target.value) == 0) {
                sessionStorage.setItem("fdp", JSON.stringify({}));
                setFDP({});
              }
            }}
          >
            {[...Array(N).keys()].map((index) => {
              return <option key={index}>{index}</option>;
            })}
          </select>
        </div>

        <div>
          <div>
            {[...Array(fdpCount).keys()].map((index, id) => {
              return <FDPComponentUI id={id} fdp={fdp} setFdp={setFDP} />;
            })}
          </div>
        </div>
        {/* End FDP */}

        {/* MOOC */}
        <div className="row my-2">
          <h6 className="col-9 mx-2">
            MOOC/ Any Courses Completed(Online/Offline)
          </h6>
          <select
            name="FdpCount"
            id="FdpCount"
            class="form-select col mx-2"
            onClick={(e) => {
              console.log(e.target.value);
              setSelectedMOOCCount(parseInt(e.target.value));
              if (parseInt(e.target.value) == 0) {
                sessionStorage.setItem("mooc", JSON.stringify({}));
                setMOOC({});
              }
            }}
          >
            {[...Array(N).keys()].map((index) => {
              return <option key={index}>{index}</option>;
            })}
          </select>
        </div>

        <div>
          <div>
            {[...Array(moocCount).keys()].map((index, id) => {
              return <MoocComponentUI id={id} mooc={mooc} setMOOC={setMOOC} />;
            })}
          </div>
        </div>
        {/* END MOOC */}
      </div>
      <div className="container card my-2 p-4">
        <Others />
      </div>

      <div className="container card my-2 p-4" style={{marginBottom:"50px"}}>
        
        <GovernmentDetails />
      </div>
     <br/>
     <br/>
      <div >
        <Link
          to={`/resume`}
          state={{
            name: name,
            middleName: middleName,
            lastName: lastName,
            selectedSalutations: selectedSalutations,
            qualification: qualification,
            designation: designation,
            email: email,
            fdp: fdp,
          }}
          className="btn btn-danger"
          style={{position:"fixed",bottom:"20px",right:"20px"}}
        >
        <svg style={{marginTop:"-4px",marginRight:"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
</svg>
         Generate PDF
        </Link>
      </div>
    </div>
  );
}
