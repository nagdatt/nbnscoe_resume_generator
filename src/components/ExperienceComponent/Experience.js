import React from "react";

const N = 40;
export default function Experience(props) {
  const [teachingYear, setTeachingYear] = React.useState(0);
  const [teachingMonth, setTeachingMonth] = React.useState(0);
  const [teachingContent, setTeachingContent] = React.useState(
    sessionStorage.getItem("teachingContent")
  );
  const [industryYear, setIndustryYear] = React.useState(0);
  const [industryMonth, setIndustryMonth] = React.useState(0);
  const [industryContent, setIndustryContent] = React.useState(
    sessionStorage.getItem("industryContent")
  );
  const [researchYear, setResearchYear] = React.useState(0);
  const [researchMonth, setResearchMonth] = React.useState(0);
  const [researchContent, setResearchContent] = React.useState(
    sessionStorage.getItem("researchContent")
  );
  const [adminstrativeYear, setAdminstrativeYear] = React.useState(0);
  const [adminstrativeMonth, setAdminstrativeMonth] = React.useState(0);
  const [adminstrativeContent, setAdminstrativeContent] = React.useState(
    sessionStorage.getItem("adminstrativeContent")
  );

  const [totalexpyear, setTotalExpYear] = React.useState(0);
  const [totalexpmonth, setTotalExpmonth] = React.useState(0);
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
    sessionStorage.setItem(
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
      <h6 className="col mx-2" style={{ color: "red" }}>
        {" "}
        ("$" is considered as new bullet point)
      </h6>

      <div className="row my-4">
      <h6 className="col-6">Total Experience in years and months</h6>
      <select
          name="FdpCount"
          id="TeachingYear"
          class="form-select col mx-2"
          onChange={(e) => {
            setTotalExpYear(parseInt(e.target.value));
            sessionStorage.setItem("totalexpyear",e.target.value)
          }}
        >
          <option>Years</option>
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        <select
          name="FdpCount"
          id="Teaching Month"
          class="form-select col mx-2"
          onChange={(e) => {
            setTotalExpmonth(parseInt(e.target.value));
            sessionStorage.setItem("totalexpmonth",e.target.value)
          }}
        >
          <option>Months</option>

          {[...Array(12).keys()].map((index) => {
            return <option key={index}>{index + 1}</option>;
          })}
        </select>
        </div>

        {/* End total Experienc years and months */}
      <div className="row">
        <h6 className="col-6">Teaching Experience in years and months</h6>
        <select
          name="FdpCount"
          id="TeachingYear"
          class="form-select col mx-2"
          onChange={(e) => {
            setTeachingYear(parseInt(e.target.value));
          }}
        >
          <option>Years</option>
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        <select
          name="FdpCount"
          id="Teaching Month"
          class="form-select col mx-2"
          onChange={(e) => {
            setTeachingMonth(parseInt(e.target.value));
          }}
        >
          <option>Months</option>

          {[...Array(12).keys()].map((index) => {
            return <option key={index}>{index + 1}</option>;
          })}
        </select>
          <small>List Major Roles and Responsibility Handled</small>
        <textarea
          value={sessionStorage.getItem("teachingContent")}
          onChange={(e) => {
            sessionStorage.setItem("teachingContent", e.target.value);
            setTeachingContent(e.target.value);
          }}
          className="form-control my-2"
          placeholder="List Major Roles and Responsibility Handled"
        />
      </div>
      <div className="row my-2">
        <h6 className="col-6">Industry Experience in years and months</h6>
        <select
          name="FdpCount"
          id="IndustryYear"
          class="form-select col mx-2"
          onChange={(e) => {
            setIndustryYear(parseInt(e.target.value));
          }}
        >
          <option>Years</option>
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        <select
          name="FdpCount"
          id="IndustryMonth"
          class="form-select col mx-2"
          onChange={(e) => {
            setIndustryMonth(parseInt(e.target.value));
          }}
        >
          <option>Months</option>

          {[...Array(12).keys()].map((index) => {
            return <option key={index}>{index + 1}</option>;
          })}
        </select>
        <small>List Major Roles and Responsibility Handled</small>

        <textarea
          value={sessionStorage.getItem("industryContent")}
          onChange={(e) => {
            sessionStorage.setItem("industryContent", e.target.value);
            setIndustryContent(e.target.value);
          }}
          className="form-control my-2"
          placeholder="List Major Roles and Responsibility Handled industryContent"
        />
      </div>

      <div className="row my-2">
        <h6 className="col-6">Research Experience in years and months</h6>
        <select
          name="FdpCount"
          id="ResearchYear"
          class="form-select col mx-2"
          onChange={(e) => {
            setResearchYear(parseInt(e.target.value));
          }}
        >
          <option>Years</option>
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        <select
          name="FdpCount"
          id="ReasearchMonth"
          class="form-select col mx-2"
          onChange={(e) => {
            setResearchMonth(parseInt(e.target.value));
          }}
        >
          <option>Months</option>

          {[...Array(12).keys()].map((index) => {
            return <option key={index}>{index + 1}</option>;
          })}
        </select>
        <small>List Major Roles and Responsibility Handled</small>

        <textarea
          value={sessionStorage.getItem("researchContent")}
          onChange={(e) => {
            sessionStorage.setItem("researchContent", e.target.value);
            setResearchContent(e.target.value);
          }}
          className="form-control my-2"
          placeholder="List Major Roles and Responsibility Handled"
        />
      </div>

      {/* Adminstrative Experience */}
      <div className="row my-2">
        <h6 className="col-6">Adminstrative Experience in years and months</h6>
        <select
          name="FdpCount"
          id="ResearchYear"
          class="form-select col mx-2"
          onChange={(e) => {
            setAdminstrativeYear(parseInt(e.target.value));
          }}
        >
          <option>Years</option>
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
        <select
          name="FdpCount"
          id="ReasearchMonth"
          class="form-select col mx-2"
          onChange={(e) => {
            setAdminstrativeMonth(parseInt(e.target.value));
          }}
        >
          <option>Months</option>

          {[...Array(12).keys()].map((index) => {
            return <option key={index}>{index + 1}</option>;
          })}
        </select>
        <small>List Major Roles and Responsibility Handled</small>

        <textarea
          value={sessionStorage.getItem("adminstrativeContent")}
          onChange={(e) => {
            sessionStorage.setItem("adminstrativeContent", e.target.value);
            setAdminstrativeContent(e.target.value);
          }}
          className="form-control my-2"
          placeholder="List Major Roles and Responsibility Handled"
        />
      </div>
      {/* End Administrative Experience */}
    </div>
  );
}
