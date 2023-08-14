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

export default function Resume(props) {
  const location = useLocation();
  const params=new URLSearchParams(location.search);
  const paramNameValue = JSON.parse(params.get('paramName'));
  const data = location.state;
  const [fdp, setFdp] = React.useState([]);
  const [mooc, setMooc] = React.useState([]);

  React.useEffect(() => {
    
    const temp = [];
    const temp2 = [];
    const tempFdp=JSON.parse(sessionStorage.getItem("fdp"))
    const tempMooc=JSON.parse(sessionStorage.getItem("mooc"))
    if(tempFdp)
   { Object.keys(tempFdp).forEach((key) => {
      temp.push(tempFdp[key]);
    });
    setFdp(temp);
  }
    if(tempMooc)
   { Object.keys(tempMooc).forEach((key) => {
      temp2.push(tempMooc[key]);
    });
    setMooc(temp2)
  }
   
    
  }, []);
  const printContent = () => {
    window.print();
  };

  return (
    <div>
    < >
    <Button
        className="print-button-container printButton btn-danger"
        onClick={printContent}
        style={{position:"fixed",bottom:"20px",right:"20px"}}
      >
   <svg style={{marginTop:"-4px"}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
</svg> Save
      </Button>
      <div id="printable-content">
        <table class="table table-striped" style={{ width: "100%" }}>
          <tr style={{ textAlign: "center", verticalAlign: "center" }}>
          <Header/>
          </tr>
         <DisplayProfile data={data}/>
          {/* Educational Table */}
          <DisplayEducationalDetails/>
          {/* End Educational Table */}
          {/* Experince Table */}
          <DisplayExperience/>
          <DisplayAreaOfInterest/>
          {/* End Experience Table */}

          {/* Subjects Handled */}
          <DisplaySubjectHandled/>
          {/* ENdSubjects Handled */}
        {/* Research And Guidence */}
        <DisplayResearchGuidence/>
        {/* End Research And Guidence */}
        
          {/* FDP Table */}
          <DisplayFdpComponent fdp={fdp}/>
          <DisplayMoocComponent mooc={mooc}/>

          <DisplayOthers/>
          <DisplayGovernmentDetails/>
        </table>
      </div>
     
    </>
        </div>
  );
}

{
  /* <tr>
<td colSpan={2}>

  <table style={{width:"100%"}}>
    <tr>
      <th style={{width:"5%"}}>Sr.No</th>
      <th style={{width:"30%"}}>Title</th>
      <th style={{width:"30%"}}>Organized by</th>
      <th style={{width:"15%"}}>Dates from to</th>
      <th style={{width:"15%"}}>Duration in Weeks</th>
    </tr>
   {[1,2,3,4,5,6].map(()=>{
    return(
      <tr>

      <td>A</td>
      <td>Innovation Ambassador training
(Foundation Level)
conducted by MoE&#39;s Innovation
Cell &amp; AICTE</td><td>AICTE Training And
Learning (ATAL)
Academy,</td><td>A</td><td>A</td>
    </tr>
    )
   })}
  </table>
</td>
</tr> */
}
