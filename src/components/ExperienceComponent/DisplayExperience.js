import React from "react";

export default function DisplayExperience(props) {
  const [experience, setExperience] = React.useState([]);
  const [booleanExp, setBooleanExp] = React.useState([]);
  const [totalExperience,setTotalExperience]=React.useState([0,0])
  React.useEffect(() => {}, [experience]);
  React.useEffect(() => {
    let exp = sessionStorage.getItem("experience");
    let sum = 0;
    let exp2 = JSON.parse(exp);
    sum += exp2[0].teachingYear + exp2[0].teachingMonth;
    console.log(sum);

    sum += exp2[1].industryYear + exp2[1].industryMonth;
        console.log(sum);

    sum += exp2[2].researchYear + exp2[2].researchMonth;
    sum += exp2[3]?.adminstrativeYear + exp2[3]?.adminstrativeMonth;
    console.log(sum);

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
              <h6>Total Experience : {totalExperience[0]} Years and {totalExperience[1]} Months </h6>
            </td>
          </tr>
          {/* Teaching */}

          {experience[0]?.teachingYear + experience[0]?.teachingMonth == 0 ? (
            ""
          ) : (
            <>
              <tr>
                <td>
                  <h6>Teaching Experience </h6>
                </td>
                <td>
                  {" "}
                  <p>
                    {experience[0]?.teachingYear} Years and{" "}
                    {experience[0]?.teachingMonth} months
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Teaching</h6>
                </td>
                <td>
                  <p>{experience[0]?.teachingContent}</p>
                </td>
              </tr>
            </>
          )}
          {/* End Teaching */}

          {/* Industry */}

          {(experience[1]?.industryYear + experience[1]?.industryMonth == 0) ? (
            ""
          ) : (
            <>
              <tr>
                <td>
                  <h6>Industry Experience </h6>
                </td>
                <td>
                  {" "}
                  <p>
                    {experience[1]?.industryYear} Years and{" "}
                    {experience[1]?.industryMonth} months
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Industry</h6>
                </td>
                <td>
                  <p>{experience[1]?.industryContent}</p>
                </td>
              </tr>
            </>
          )}
          {/* End Industry */}

           {/* Research */}

           {(experience[2]?.researchYear + experience[2]?.researchMonth == 0) ? (
            ""
          ) : (
            <>
              <tr>
                <td>
                  <h6>Research Experience </h6>
                </td>
                <td>
                  {" "}
                  <p>
                    {experience[2]?.researchYear} Years and{" "}
                    {experience[2]?.researchMonth} months
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Research</h6>
                </td>
                <td>
                  <p>{experience[2]?.researchContent}</p>
                </td>
              </tr>
            </>
          )}
          {/* End Research */}

           {/* Adminstrative */}

           {(experience[3]?.adminstrativeYear + experience[3]?.adminstrativeMonth == 0) ? (
            ""
          ) : (
            <>
              <tr>
                <td>
                  <h6>Research Experience </h6>
                </td>
                <td>
                  {" "}
                  <p>
                    {experience[3]?.adminstrativeYear} Years and{" "}
                    {experience[3]?.adminstrativeMonth} months
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6> Major Roles and Responsibilities Handled in Research</h6>
                </td>
                <td>
                  <p>{experience[3]?.adminstrativeContent}</p>
                </td>
              </tr>
            </>
          )}
          {/* End Research */}
        </>
      )}
    </>
  );
}
