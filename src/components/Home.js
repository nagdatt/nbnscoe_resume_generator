import React from "react";
import { Link } from "react-router-dom";
import FDPComponentUI from "./FDPComponent/FDPComponentUI";
import Experience from "./ExperienceComponent/Experience";
import AreaOfInterest from "./AreaOfInterest/AreaOfInterest";
import SubjectsHandled from "./SubjectsHandled/SubjectsHandled";
import ResearchGuidence from "./ResearchGuidence/ResearchGuidence";
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
  const [designation, setDesignation] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [fdp, setFDP] = React.useState({});

 
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Resume</h1>
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Middle Name"
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>

        <div className="row my-2">
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Designation"
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Qualification"
            onChange={(e) => {
              setQualification(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control col mx-2"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="row">
          <h6 className="col-9 mx-2">Total Number of FDP/STTP/Workshop Attended</h6>
          <select
            name="FdpCount"
            id="FdpCount"
            class="form-select col mx-2"
            onChange={(e) => {
              setSelectedFdpCount(parseInt(e.target.value));
              if (parseInt(e.target.value) == 0) setFDP({});
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
      </div>
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
      <div className="container card my-2">
        <Link
          to="/resume"
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
          className="btn btn-primary"
         
        >
          Generate Pdf
        </Link>
      </div>
    </div>
  );
}
