import React from "react";
import { useLocation } from "react-router";
import { Button } from "react-bootstrap";
import "./resume.css";
import DisplayExperience from "./ExperienceComponent/DisplayExperience";
import DisplayAreaOfInterest from "./AreaOfInterest/DisplayAreaOfInterest";
import DisplaySubjectHandled from "./SubjectsHandled/DisplaySubjectHandled";
import DisplayResearchGuidence from "./ResearchGuidence/DisplayResearchGuidence";
export default function Resume(props) {
  const location = useLocation();
  const data = location.state;

  const [fdp, setFdp] = React.useState([]);

  React.useEffect(() => {
    
   console.log(data.fdp)
    const temp = [];
    Object.keys(data.fdp).forEach((key) => {
      temp.push(data.fdp[key]);
    });
    setFdp(temp);
  }, []);
  const printContent = () => {
    window.print();
  };

  return (
    <div>
      <Button
        className="print-button-container printButton"
        onClick={printContent}
      >
        Print
      </Button>
      <div id="printable-content">
        <table class="table table-striped" style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "25%" }}>
              <h6>Photo</h6>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <h6>Name</h6>
            </td>
            <td>
              <p>
                {data?.selectedSalutations} {data?.name} {data?.middleName}{" "}
                {data?.lastName}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Designation</h6>
            </td>
            <td>
              <p>{data?.designation}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Qualification</h6>
            </td>
            <td>
              <p>{data?.qualification}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Email</h6>
            </td>
            <td>
              <p>{data?.email}</p>
            </td>
          </tr>
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
          {fdp.length == 0 ? (
            ""
          ) : (
            <>
              <tr>
                <td colSpan={2}>
                  <h6>FDP/STTP/Workshop Attended: {fdp.length}</h6>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th style={{ width: "5%" }}> Sr.No</th>
                      <th style={{ width: "30%" }}> Title</th>
                      <th style={{ width: "30%" }}> Organized by</th>
                      <th style={{ width: "15%" }}> Dates from to</th>
                      <th style={{ width: "15%" }}> Duration in Weeks</th>
                    </tr>
                    {fdp.map((ele, id) => {
                      return (
                        <tr>
                          <td>{id + 1}</td>
                          <td>{ele.title}</td>
                          <td>{ele.organized}</td>
                          <td>
                            {ele.from} to {ele.to}
                          </td>
                          <td>{ele.duration}</td>
                        </tr>
                      );
                    })}
                  </table>
                </td>
              </tr>
            </>
          )}
          {/* FDP Table End */}
        </table>
      </div>
      <Button
        className="print-button-container printButton"
        onClick={printContent}
      >
        Print
      </Button>
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
