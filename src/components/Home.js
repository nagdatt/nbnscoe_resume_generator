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
import IndexHeader from "./Header/IndexHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ConductedComponentUI from "./ConductedComponent/ConductedComponentUI";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import Summery from "./Summery/Summery";
const N = 100;
export default function Home() {
  const [name, setName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const salutations = ["Mr.", "Mrs.", "Dr.", "Er.", "Ms.","Prof."];
  const [selectedSalutations, setSelectedSalutations] = React.useState(
    salutations[0]
  );
  const [fdpCount, setSelectedFdpCount] = React.useState(0);
  const [moocCount, setSelectedMOOCCount] = React.useState(0);
  const [conducted,setConducted] = React.useState(0);

  const [designation, setDesignation] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");

  const [fdp, setFDP] = React.useState({});
  const [mooc, setMOOC] = React.useState({});
  const [conductedList, setConductedList] = React.useState({});
    const clearCoockies=()=>{
      localStorage.clear()
      window.location.reload();
    }
  return (
    <div>
      {/* <div className="container  my-2" style={{width: "100%" }}>
      
        <Header/>
     
      </div> */}
      <Card className=" card  my-2">
        <div className="row">
          {" "}
          <IndexHeader />
         <div className="container text-end">
          <button className="btn btn-warning m-2 " onClick={clearCoockies}>Clear All</button>
         
         </div>

        </div>
      </Card>

      <Tabs>
        <Tab eventKey="BasicInformation" title="Basic Information">
          <Card className=" card p-4 my-2">
            {/* First Row */}
            <h6> Profile Information</h6>
            <div className="row my-2">
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
                value={localStorage.getItem("first_name")}
                onChange={(e) => {
                  localStorage.setItem("first_name", e.target.value);
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control col mx-2"
                placeholder="Middle Name"
                value={localStorage.getItem("middle_name")}
                onChange={(e) => {
                  localStorage.setItem("middle_name", e.target.value);

                  setMiddleName(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control col mx-2"
                placeholder="Last Name"
                value={localStorage.getItem("last_name")}
                onChange={(e) => {
                  localStorage.setItem("last_name", e.target.value);

                  setLastName(e.target.value);
                }}
              />
            </div>

            <div className="row my-2">
              <input
                type="text"
                className="form-control col mx-2"
                placeholder="Designation"
                value={localStorage.getItem("designation")}
                onChange={(e) => {
                  localStorage.setItem("designation", e.target.value);

                  setDesignation(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control col mx-2"
                placeholder="Qualification"
                value={localStorage.getItem("qualification")}
                onChange={(e) => {
                  localStorage.setItem("qualification", e.target.value);

                  setQualification(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control col mx-2"
                placeholder="Email"
                value={localStorage.getItem("email")}
                onChange={(e) => {
                  localStorage.setItem("email", e.target.value);

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
                  value={localStorage.getItem("contact")}
                  onChange={(e) => {
                    localStorage.setItem("contact", e.target.value);

                    setContactNo(e.target.value);
                  }}
                />
              </div>
              <div className="col-3 text-right mt-2" style={{ textAlign: "end" }}>
                <h6>Select Profile Image</h6>
              </div>
              <div className="col">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    localStorage.setItem(
                      "dp",
                      URL.createObjectURL(e.target.files[0])
                    );
                  }}
                  className="form-control "
                  placeholder="Select Profile Image"
                />
              </div>
            </div>
          </Card>
          <div className=" card my-2 p-4">
            <Summery />
          </div>
          <div className=" card my-2 p-4">
            <AreaOfInterest />
          </div>
         
        </Tab>

        {/* Educational Details */}
        <Tab eventKey="EducationalDetails" title="Educational Details">
          <div className=" card my-2 p-4">
            <EducationalDetails />
          </div>
        </Tab>
        {/* End Educational Details */}
        {/* Experience */}
        <Tab eventKey="Experience" title="Experience">
          <div className=" card my-2 p-4">
            <Experience />
          </div>
        </Tab>
        {/* End Experience */}

        {/* Area of Interest */}

        <Tab eventKey="SubjectsHandled" title="Subjects Handled">
          <div className=" card my-2 p-4">
            <SubjectsHandled />
          </div>
        </Tab>
        {/* End Area of Interest */}

        {/* Research And Guidence */}
        <Tab eventKey="ResearchGuidence" title="Research and Guidance">
          <div className=" card my-2 p-4">
            <ResearchGuidence />
          </div>
        </Tab>

        {/* End of Reasearch And Guidence */}
        <Tab
          eventKey="Trainingandcertifications"
          title="Training and Certifications"
        >
          <div className=" card my-2 p-4">
            {/* FDP */}
           

                   <FDPComponentUI  />;
               
             
            {/* End FDP */}

            {/* MOOC */}
            
                    <MoocComponentUI />
                
            {/* END MOOC */}


               {/* FDP conducted */}
               
                    <ConductedComponentUI  />
                 
            
            {/* END FDP conducted */}
          </div>
        </Tab>
        <Tab eventKey="Others" title="Others Activities">
          <div className=" card my-2 p-4">
            <Others />
          </div>
        </Tab>
        <Tab eventKey="GovernmentDetails" title="Personal Details">
          <div
            className=" card my-2 p-4"
            style={{ marginBottom: "50px" }}
          >
            <GovernmentDetails />
          </div>
        </Tab>
      </Tabs>
      <Footer/>
      <div>
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
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
        >
          <svg
            style={{ marginTop: "-4px", marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-gear-wide-connected"
            viewBox="0 0 16 16"
          >
            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
          </svg>
          Generate PDF
        </Link>
     
      </div>
     
    </div>
  );
}
