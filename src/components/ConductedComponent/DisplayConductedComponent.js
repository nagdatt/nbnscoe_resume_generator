import React from 'react'
import { fontSizeForResume } from '../staticDimentions';

export default function DisplayConductedComponent() {
  const [fdp,setFDP]=React.useState(JSON.parse(localStorage.getItem("conducted_component")))
  function convertDaysToMonthsWeeksDays(days) {
    if (isNaN(days) || days < 0) {
      return 0;
    }
  
    const daysInMonth = 30; // Assuming each month has 30 days
    const daysInWeek = 7;
  
    const months = Math.floor(days / daysInMonth);
    const remainingDays = days % daysInMonth;
    const weeks = Math.floor(remainingDays / daysInWeek);
    const remainingDaysInWeeks = remainingDays % daysInWeek;
  
    const result = [];
  
    if (months > 0) {
      result.push(`${months} month${months > 1 ? 's' : ''}`);
    }
    if (weeks > 0) {
      result.push(`${weeks} week${weeks > 1 ? 's' : ''}`);
    }
    if (remainingDaysInWeeks > 0) {
      result.push(`${remainingDaysInWeeks} day${remainingDaysInWeeks > 1 ? 's' : ''}`);
    }
  
    return result.join(', ');
  }
  function calculateDuration(fromDate, toDate) {
    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);
  
    const millisecondsDifference = toDateObj - fromDateObj;
  
    const daysDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
    const months=daysDifference/31;
  
   return convertDaysToMonthsWeeksDays(daysDifference)
  }
  return (
   <>
   {(fdp==null || fdp.length == 0) ? (
            ""
          ) : (
            <>
              <tr>
                <td colSpan={2}>
                  <h6>FDP/STTP/Workshop Conducted: {fdp.length}</h6>
                </td>
              </tr>
              <tr style={{fontSize:fontSizeForResume}}>
                <td colSpan={2}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th style={{ width: "5%",textAlign:"center" }}> Sr.No</th>
                      <th style={{ width: "20%" ,textAlign:"center" }}> Title</th>
                      <th style={{ width: "20%" ,textAlign:"center" }}> Organized by</th>
                      <th style={{ width: "20%" ,textAlign:"center" }}> Worked As</th>
                      <th style={{ width: "15%" ,textAlign:"center" }}> Dates from to</th>
                      <th style={{ width: "15%",textAlign:"center"  }}> Duration in Weeks/ Days</th>
                    </tr>
                    {fdp.map((ele, id) => {
                      return (
                        <tr>
                          <td style={{ textAlign:"center" }}>{id + 1}</td>
                          <td >{ele.title}</td>
                          <td>{ele.organizedBy}</td>
                          <td>{ele.workedas}</td>
                          <td style={{ textAlign:"center" }}>
                            {ele.fromDate} to {ele.toDate}
                          </td>
                          <td style={{ textAlign:"center" }}>{ele.duration}</td>
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
