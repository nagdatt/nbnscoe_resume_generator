import React from 'react'

export default function DisplayFdpComponent(props) {

  const [fdp,setFDP]=React.useState(props.fdp)
  return (
   <>
   {props.fdp.length == 0 ? (
            ""
          ) : (
            <>
              <tr>
                <td colSpan={2}>
                  <h6>FDP/STTP/Workshop Attended: {props.fdp.length}</h6>
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
                    {props.fdp.map((ele, id) => {
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
   </>
  )
}
