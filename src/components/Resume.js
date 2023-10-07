import React from "react";
import { useLocation } from "react-router";
import { Button } from "react-bootstrap";
import "./resume.css";
import DisplayExperience from "./ExperienceComponent/DisplayExperience";
import DisplayAreaOfInterest from "./AreaOfInterest/DisplayAreaOfInterest";
import DisplaySubjectHandled from "./SubjectsHandled/DisplaySubjectHandled";
import DisplayResearchGuidence from "./ResearchGuidence/DisplayResearchGuidence";
import DisplayFdpComponent from "./FDPComponent/DisplayFdpComponent";
import DisplayMoocComponent from "./MoocComponent/DisplayMoocComponent";
import DisplayOthers from "./Others/DisplayOthers";
import DisplayEducationalDetails from "./EducationalDetails/DisplayEducationalDetails";
import DisplayProfile from "./DisplayPRofile/DisplayProfile";
import DisplayGovernmentDetails from "./GovernmentDetails/DisplayGovernmentDetails";
import Header from "./Header/Header";
import DisplayConductedComponent from "./ConductedComponent/DisplayConductedComponent";
import Footer from "./Footer";
import { fontSmallSizeForResume } from "./staticDimentions";
import DisplaySummery from "./Summery/DisplaySummery";

export default function Resume(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramNameValue = JSON.parse(params.get("paramName"));
  const data = location.state;
  const [fdp, setFdp] = React.useState([]);
  const [mooc, setMooc] = React.useState([]);
  const [conductedList, setConductedList] = React.useState([]);

  React.useEffect(() => {
    const temp = [];
    const temp2 = [];
    const temp3 = [];
    const tempFdp = JSON.parse(sessionStorage.getItem("fdp"));
    const tempMooc = JSON.parse(sessionStorage.getItem("mooc"));
    const tempconducted = JSON.parse(sessionStorage.getItem("conducted"));

    if (tempFdp) {
      Object.keys(tempFdp).forEach((key) => {
        temp.push(tempFdp[key]);
      });
      setFdp(temp);
    }
    if (tempMooc) {
      Object.keys(tempMooc).forEach((key) => {
        temp2.push(tempMooc[key]);
      });
      setMooc(temp2);
    }
    if (tempconducted) {
      Object.keys(tempconducted).forEach((key) => {
        temp3.push(tempconducted[key]);
      });
      setConductedList(temp3);
    }
  }, []);
  const printContent = () => {
    window.print();
  };

  return (
    <div >
      <>
        <Button
          className="print-button-container printButton btn-danger"
          onClick={printContent}
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
        >
          <svg
            style={{ marginTop: "-4px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-arrow-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
          </svg>{" "}
          Save
        </Button>
        <div id="printable-content" style={{marginBottom:"10px"}}>
        <div className="d-flex flex-row-reverse " >
                <small style={{ fontFamily: "Times New Roman" ,fontSize:fontSmallSizeForResume}}>
                 
                    This resume is auto generated by Resume Generator software developed by <b>CSE Department, NBNSCOE, Solapur</b>
                   
                </small>
              </div>
          <table class="table table-striped" style={{ width: "100%" }}>
            <tr style={{ textAlign: "center", verticalAlign: "center" }}>
              <Header />
            </tr>
            <DisplayProfile data={data} />
            {/* Educational Table */}
            <DisplaySummery />
            <DisplayEducationalDetails />
            
            {/* End Educational Table */}
            {/* Experince Table */}
            <DisplayExperience />
            <DisplayAreaOfInterest />
            {/* End Experience Table */}

            {/* Subjects Handled */}
            <DisplaySubjectHandled />
            {/* ENdSubjects Handled */}
            {/* Research And Guidence */}
            <DisplayResearchGuidence />
            {/* End Research And Guidence */}

            {/* FDP Table */}
            <DisplayFdpComponent fdp={fdp} />
            <DisplayMoocComponent mooc={mooc} />
            <DisplayConductedComponent conductedList={conductedList} />

            <DisplayOthers />
            <DisplayGovernmentDetails />
          </table>

        </div>
<footer></footer>
      </>

    </div>
  );
}

