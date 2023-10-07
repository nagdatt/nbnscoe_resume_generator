import React from "react";
import { fontSizeForResume } from "../staticDimentions";
const delimiter = "$";
export default function DisplayExperience(props) {
  const [experience, setExperience] = React.useState([]);

  const [teachingExp, setTeachingExp] = React.useState(
    JSON.parse(localStorage.getItem("multiplTeachingExp"))
  );

  const [industryExp, setIndustryExp] = React.useState(
    JSON.parse(localStorage.getItem("multiplIndustryExp"))
  );
  const [booleanExp, setBooleanExp] = React.useState([]);
  const [totalExperience, setTotalExperience] = React.useState([0, 0]);
  React.useEffect(() => {}, [experience]);
  React.useEffect(() => {
    let exp = localStorage.getItem("experience");
    let sum = 0;
    let sumYear = 0;
    let sumMonth = 0;
    let exp2 = JSON.parse(exp);
    console.log(exp2);
    sum += exp2[0].teachingYear + exp2[0].teachingMonth;
    sumYear += exp2[0].teachingYear;
    sumMonth += exp2[0].teachingMonth;

    sum += exp2[1].industryYear + exp2[1].industryMonth;
    sumYear += exp2[1].industryYear;
    sumMonth += exp2[1].industryMonth;

    sum += exp2[2].researchYear + exp2[2].researchMonth;
    sumYear += exp2[2].researchYear;
    sumMonth += exp2[2].researchMonth;

    sum += exp2[3]?.adminstrativeYear + exp2[3]?.adminstrativeMonth;
    sumYear += exp2[3].adminstrativeYear;
    sumMonth += exp2[3].adminstrativeMonth;

    let texp =
      localStorage.getItem("totalexpyear") == null
        ? 0
        : localStorage.getItem("totalexpyear");
    texp +=
      localStorage.getItem("totalexpmonth") == null
        ? 0
        : localStorage.getItem("totalexpmonth");
    sum += texp;
    setTotalExperience([sumYear, sumMonth]);
    setBooleanExp(sum > 0 ? true : false);
    setExperience(JSON.parse(exp));
  }, []);
  return (
    <>
      {!booleanExp || experience == null ? (
        ""
      ) : (
        <>
          <tr>
            <td colSpan={2}>
              <h6>
                Total Experience : {localStorage.getItem("totalexpyear")}{" "}
                Years and {localStorage.getItem("totalexpmonth")} Months{" "}
              </h6>
            </td>
          </tr>
          {/* Teaching */}
          {teachingExp != null && teachingExp?.length != 0 && (
            <>
              <tr>
                <td>
                  <h6>Teaching Experience </h6>
                </td>
                <td style={{ padding: "2px", fontSize: fontSizeForResume }}>
                  {teachingExp.map((element, id) => {
                    return (
                      <>
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-0">
                              <strong>Institute:</strong> {element.institute}
                            </p>
                            <p className="mb-0">
                              
                              <strong>From</strong> {element.from}
                              
                            </p>
                            <p className="mb-0">
                              <strong>Total Experience:</strong>{" "}
                              {element.totalExpYears} years{" "}
                              {element.totalExpMonths} months
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">
                              <strong>Designation:</strong>{" "}
                              {element.designation}
                            </p>
                            <p className="mb-0">
                              <strong>To:</strong> {element.to}
                            </p>
                            <p className="mb-0">
                              <strong>Approved:</strong>{" "}
                              {element.approved ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                        {
                          <hr
                            style={{
                              margin: "-2px",
                              borderTop: "1px dashed  black",
                            }}
                          />
                        }
                      </>
                    );
                  })}
                  <div className="row">
                    <div className="col-12">
                      <p className="mb-0">
                        <strong>Roles and responsibilities handled in Teaching:</strong>
                        <br />
                       {/* {experience[0].teachingContent} */}
                        {experience[0]?.teachingContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Teaching</h6>
                </td>
                <td>
                  <p>
                    {experience[0]?.teachingContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                  </p>
                </td>
              </tr> */}
            </>
          )}
          {/* End Teaching */}

          {/* Industry */}

          {industryExp != null && industryExp?.length != 0 && (
            <>
              <tr>
                <td>
                  <h6>Industry Experience </h6>
                </td>

                <td
                  colSpan={2}
                  style={{ padding: "2px", fontSize: fontSizeForResume }}
                >
                  {industryExp.map((element, id) => {
                    return (
                      <>
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-0">
                              <strong>Industry:</strong> {element.institute}
                            </p>
                            <p className="mb-0">
                              <strong>From:</strong> {element.from}
                            </p>
                            <p className="mb-0">
                              <strong>Total Experience:</strong>{" "}
                              {element.totalExpYears} years{" "}
                              {element.totalExpMonths} months
                            </p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">
                              <strong>Designation:</strong>{" "}
                              {element.designation}
                            </p>
                            <p className="mb-0">
                              <strong>To:</strong> {element.to}
                            </p>
                            {/* <p className="mb-0">
                              <strong>Approved:</strong>{" "}
                              {element.approved ? "Yes" : "No"}
                            </p> */}
                          </div>
                        </div>

                        {(
                          <hr
                            style={{
                              margin: "-2px",
                              borderTop: "1px dashed  black",
                            }}
                          />
                        )}
                      </>
                    );
                  })}

                  <div className="row">
                    <div className="col-12">
                      <p className="mb-0">
                        <strong>Major Roles and Responsibilities Handled in Industry:</strong>
                        <br />
                        
                        {experience[1]?.industryContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Teaching</h6>
                </td>
                <td>
                  <p>
                    {experience[0]?.teachingContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                  </p>
                </td>
              </tr> */}
            </>
          )}
          {/* End Industry */}

          {/* Research */}

          {experience[2]?.researchYear + experience[2]?.researchMonth == 0 ? (
            ""
          ) : (
            <>
              <tr>
                <td>
                  <h6>Research Experience </h6>
                </td>
                <td style={{ fontSize: fontSizeForResume }}>
                  {" "}
                  <p>
                    <b>Total Experience :</b> {experience[2]?.researchYear}{" "}
                    Years and {experience[2]?.researchMonth} months
                    <br />
                    <b> Major Roles and Responsibilities Handled in Research:</b>
                    <br />
                    {experience[2]?.researchContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                  </p>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Research</h6>
                </td>
                <td>
                  <p>
                    {experience[2]?.researchContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                  </p>
                </td>
              </tr> */}
            </>
          )}
          {/* End Research */}

          {/* Adminstrative */}

          {experience[3]?.adminstrativeYear +
            experience[3]?.adminstrativeMonth ==
          0 ? (
            ""
          ) : (
            <>
              <tr>
                <td>
                  <h6>Administrative Experience </h6>
                </td>
                <td>
                  {/* {" "}
                  <p>
                    {experience[3]?.adminstrativeYear} Years and{" "}
                    {experience[3]?.adminstrativeMonth} months
                  </p> */}

                  <div style={{ fontSize: fontSizeForResume }}>
                    {" "}
                    <p>
                      <b>Total Experience :</b> {experience[3]?.adminstrativeYear}{" "}
                      Years and {experience[3]?.adminstrativeMonth} months
                      <br />
                      <b>
                        {" "}
                        Major Roles and Responsibilities Handled in Administration:
                      </b>
                      <br />
                      {experience[3]?.adminstrativeContent
                        ?.split(delimiter)
                        .map((e) => {
                          if (e != "") return <li>{e}</li>;
                          return "";
                        })}
                    </p>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Research</h6>
                </td>
                <td>
                  <p>
                    {experience[3]?.adminstrativeContent
                      ?.split(delimiter)
                      .map((e) => {
                        if (e != "") return <li>{e}</li>;
                        return "";
                      })}
                  </p>
                </td>
              </tr> */}
            </>
          )}
          {/* End Research */}
        </>
      )}
    </>
  );
}
