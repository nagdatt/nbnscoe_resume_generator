import React from "react";
import TeachingExperienceForm from "./TeachingExperienceForm";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import IndustryExperienceForm from "./IndustryExperienceForm";
const N = 40;
export default function Experience(props) {
  const [teachingYear, setTeachingYear] = React.useState(parseInt(localStorage.getItem("teachingexpyear")));
  const [teachingMonth, setTeachingMonth] = React.useState(parseInt(localStorage.getItem("teachingexpmonth")));
  const [teachingContent, setTeachingContent] = React.useState(
    localStorage.getItem("teachingContent")
  );
  
  
  const [industryYear, setIndustryYear] = React.useState(parseInt(localStorage.getItem("industryexpYear")));
  const [industryMonth, setIndustryMonth] = React.useState(parseInt(localStorage.getItem("industryexpMonth")));
  const [industryContent, setIndustryContent] = React.useState(
    localStorage.getItem("industryContent")
  );
  const [researchYear, setResearchYear] = React.useState(parseInt(localStorage.getItem("researchexpYear")));
  const [researchMonth, setResearchMonth] = React.useState(parseInt(localStorage.getItem("researchexpMonth")));
  const [researchContent, setResearchContent] = React.useState(
    localStorage.getItem("researchContent")
  );
  const [adminstrativeYear, setAdminstrativeYear] = React.useState(parseInt(localStorage.getItem("adminstrativeexpYear")));
  const [adminstrativeMonth, setAdminstrativeMonth] = React.useState(parseInt(localStorage.getItem("adminstrativeexpMonth")));
  const [adminstrativeContent, setAdminstrativeContent] = React.useState(
    localStorage.getItem("adminstrativeContent")
  );

  const [totalexpyear, setTotalExpYear] = React.useState(
    localStorage.getItem("totalexpyear")
  );
  const [totalexpmonth, setTotalExpmonth] = React.useState(
    localStorage.getItem("totalexpmonth")
  );

  const [teachingexpyear, setTeachingExpYear] = React.useState(
    localStorage.getItem("teachingexpyear")
  );
  const [teachingexpmonth, setTeachingExpmonth] = React.useState(
    localStorage.getItem("teachingexpmonth")
  );
  React.useEffect(() => {
    const teachingObj = {
      teachingYear: teachingYear,
      teachingMonth: teachingMonth,
      teachingContent: teachingContent,
    };
    console.log(industryContent);

    const industryObject = {
      industryYear: industryYear,
      industryMonth: industryMonth,
      industryContent: industryContent,
    };
    const researchObj = {
      researchYear: researchYear,
      researchMonth: researchMonth,
      researchContent: researchContent,
    };

    const adminstrativeObj = {
      adminstrativeYear: adminstrativeYear,
      adminstrativeMonth: adminstrativeMonth,
      adminstrativeContent: adminstrativeContent,
    };
    console.log([teachingObj, industryObject, researchObj, adminstrativeObj]);
    localStorage.setItem(
      "experience",
      JSON.stringify([
        teachingObj,
        industryObject,
        researchObj,
        adminstrativeObj,
      ])
    );
  });
  return (
    <div>
      <div className="row">
        <h1 className="col">Experience</h1>
      </div>
      <small className="col mx-2" style={{ color: "red" }}>
        {" "}
        ("$" is considered as new bullet point)
      </small>

      <div className="row my-4">
        <h6 className="col-6">Total Experience in years and months</h6>

        <input
          className="form-control col mx-2"
          type="number"
          placeholder="Years"
          value={totalexpyear}
          onChange={(e) => {
            if (e.target.value === "") {
              setTotalExpYear(parseInt(0));
              localStorage.setItem("totalexpyear", 0);
            } else {
              setTotalExpYear(parseInt(e.target.value));
              localStorage.setItem("totalexpyear", parseInt(e.target.value));
            }
          }}
        />

        <input
          className="form-control col mx-2"
          type="number"
          placeholder="Months"

          value={totalexpmonth}
          onChange={(e) => {
            if (e.target.value === "") {
              setTotalExpmonth(parseInt(0));
              localStorage.setItem("totalexpmonth", 0);
            } else {
              setTotalExpmonth(parseInt(e.target.value));
              localStorage.setItem("totalexpmonth", parseInt(e.target.value));
            }
          }}
        />
      </div>

      {/* End total Experienc years and months */}
      <Tabs className="container ">
        <Tab eventKey="TeachingExperience" title="Teaching Experience">
          <div className="row my-2">
            <h6 className="col-6">Teaching Experience in years and months</h6>
            

            <input type="number" class="form-control col mx-2"
            value={ teachingYear}
            placeholder="Years"

              onChange={(e) => {
                setTeachingYear(parseInt(e.target.value));


                if (e.target.value === "") {
                  setTeachingYear(parseInt(0));
                  localStorage.setItem("teachingexpyear", 0);
                } else {
                  setTeachingYear(parseInt(e.target.value));
                  localStorage.setItem("teachingexpyear", parseInt(e.target.value));
                }
              }} />
            <input type="number" class="form-control col mx-2"
            value={ teachingMonth}
            placeholder="Months"

              onChange={(e) => {
                setTeachingMonth(parseInt(e.target.value));


                if (e.target.value === "") {
                  setTeachingMonth(parseInt(0));
                  localStorage.setItem("teachingexpmonth", 0);
                } else {
                  setTeachingMonth(parseInt(e.target.value));
                  localStorage.setItem("teachingexpmonth", parseInt(e.target.value));
                }
              }} />
            <small style={{ color: "red" }}>
              if you want to display these details in resume then do not set
              years and months to 0
            </small>

            <TeachingExperienceForm />
            <small>List Major Roles and Responsibilities Handled</small>

            <textarea
              value={localStorage.getItem("teachingContent")}
              onChange={(e) => {
                localStorage.setItem("teachingContent", e.target.value);
                setTeachingContent(e.target.value);
              }}
              className="form-control my-2"
              placeholder="List Major Roles and Responsibility Handled"
            />
          </div>
        </Tab>
        <Tab eventKey="IndustryExperience" title="Industry Experience">
          <div className="row my-2">
            <h6 className="col-6">Industry Experience in years and months</h6>
            <input type="number" class="form-control col mx-2"
            value={ industryYear}
            placeholder="Years"

              onChange={(e) => {
                setIndustryYear(parseInt(e.target.value));


                if (e.target.value === "") {
                  setIndustryYear(parseInt(0));
                  
                  localStorage.setItem("industryexpYear", 0);
                } else {
                  setIndustryYear(parseInt(e.target.value));
                  localStorage.setItem("industryexpYear", parseInt(e.target.value));
                }
              }} />
            <input type="number" class="form-control col mx-2"
            value={ industryMonth}
            placeholder="Months"

              onChange={(e) => {
                setIndustryMonth(parseInt(e.target.value));


                if (e.target.value === "") {
                  setIndustryMonth(parseInt(0));
                  
                  localStorage.setItem("industryexpMonth", 0);
                } else {
                  setIndustryMonth(parseInt(e.target.value));
                  localStorage.setItem("industryexpMonth", parseInt(e.target.value));
                }
              }} />
            <small style={{ color: "red" }}>
              if you want to display these details in resume then do not set
              years and months to 0
            </small>

            <IndustryExperienceForm />
            <small>List Major Roles and Responsibilities Handled</small>

            <textarea
              value={localStorage.getItem("industryContent")}
              onChange={(e) => {
                localStorage.setItem("industryContent", e.target.value);
                setIndustryContent(e.target.value);
              }}
              className="form-control my-2"
             
              placeholder="List Major Roles and Responsibility Handled"
            />
          </div>
        </Tab>
        <Tab eventKey="ResearchExperience" title="Research Experience">
          <div className="row my-2">
            <h6 className="col-6">Research Experience in years and months</h6>
            <input type="number" class="form-control col mx-2"
            value={ researchYear}
            placeholder="Years"

              onChange={(e) => {
                setResearchYear(parseInt(e.target.value));


                if (e.target.value === "") {
                  setResearchYear(parseInt(0));
                  
                  localStorage.setItem("researchexpYear", 0);
                } else {
                  setResearchYear(parseInt(e.target.value));
                  localStorage.setItem("researchexpYear", parseInt(e.target.value));
                }
              }} />
            <input type="number" class="form-control col mx-2"
            value={ researchMonth}
            placeholder="Months"

              onChange={(e) => {
                setResearchMonth(parseInt(e.target.value));


                if (e.target.value === "") {
                  setResearchMonth(parseInt(0));
                  
                  localStorage.setItem("researchexpMonth", 0);
                } else {
                  setResearchMonth(parseInt(e.target.value));
                  localStorage.setItem("researchexpMonth", parseInt(e.target.value));
                }
              }} />
            <small style={{ color: "red" }}>
              if you want to display these details in resume then do not set
              years and months to 0
            </small>

            <small>List Major Roles and Responsibility Handled</small>

            <textarea
             rows={4}
              value={localStorage.getItem("researchContent")}
              onChange={(e) => {
                localStorage.setItem("researchContent", e.target.value);
                setResearchContent(e.target.value);
              }}
              className="form-control my-2"
              placeholder="List Major Roles and Responsibility Handled"
            />
          </div>
        </Tab>

        {/* Adminstrative Experience */}
        <Tab
          eventKey="AdminstrativeExperience"
          title="Adminstrative Experience"
        >
          <div className="row my-2">
            <h6 className="col-6">
              Adminstrative Experience in years and months
            </h6>
            <input type="number" class="form-control col mx-2"
            value={ adminstrativeYear}
                      placeholder="Years"

              onChange={(e) => {
                setAdminstrativeYear(parseInt(e.target.value));


                if (e.target.value === "") {
                  setAdminstrativeYear(parseInt(0));
                  
                  localStorage.setItem("adminstrativeexpYear", 0);
                } else {
                  setAdminstrativeYear(parseInt(e.target.value));
                  localStorage.setItem("adminstrativeexpYear", parseInt(e.target.value));
                }
              }} />
            <input type="number" class="form-control col mx-2"
            value={ adminstrativeMonth}
            placeholder="Months"

              onChange={(e) => {
                setAdminstrativeMonth(parseInt(e.target.value));


                if (e.target.value === "") {
                  setAdminstrativeMonth(parseInt(0));
                  
                  localStorage.setItem("adminstrativeexpMonth", 0);
                } else {
                  setAdminstrativeMonth(parseInt(e.target.value));
                  localStorage.setItem("adminstrativeexpMonth", parseInt(e.target.value));
                }
              }} />
            <small style={{ color: "red" }}>
              if you want to display these details in resume then do not set
              years and months to 0
            </small>

            <small>List Major Roles and Responsibility Handled</small>

            <textarea
             rows={4}
              value={localStorage.getItem("adminstrativeContent")}
              onChange={(e) => {
                localStorage.setItem("adminstrativeContent", e.target.value);
                setAdminstrativeContent(e.target.value);
              }}
              className="form-control my-2"
              placeholder="List Major Roles and Responsibility Handled"
            />
          </div>
        </Tab>
      </Tabs>
      {/* End Administrative Experience */}
    </div>
  );
}
