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
      <h1 style={{ textAlign: "center" }}>Resume</h1>
      <div className="container card my-2">
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
          className="btn btn-primary"
        >
          Generate Pdf
        </Link>
      </div>
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
          <h1>Tables</h1>
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

      <div className="container card my-2 p-4">
        <GovernmentDetails />
      </div>
      <div className="container card my-2">
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
          className="btn btn-primary"
        >
          Generate Pdf
        </Link>
      </div>
    </div>
  );
}
