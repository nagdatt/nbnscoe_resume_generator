import React from 'react'

export default function DisplayMoocComponent(props) {
console.log(props.mooc)
  const [mooc,setMooc]=React.useState(props.mooc)
  return (
   <>
   {props.mooc.length == 0 ? (
            ""
          ) : (
            <>
              <tr>
                <td colSpan={2}>
                  <h6>MOOC Courses with E-Certification: {props.mooc.length}</h6>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th style={{ width: "5%" }}> Sr.No</th>
                      <th style={{ width: "30%" }}> Title</th>
                      <th style={{ width: "15%" }}> Dates from to</th>
                      <th style={{ width: "15%" }}> Duration in Weeks</th>
                    </tr>
                    {props.mooc.map((ele, id) => {
                      return (
                        <tr>
                          <td>{id + 1}</td>
                          <td>{ele.title}</td>
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
   </>
  )
}
