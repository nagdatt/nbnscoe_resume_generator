import React from "react";

export default function Others() {

    const [achivemnets,setAchievements]=React.useState("")
    const [membership,setMembership]=React.useState("")
    const [projects,setProjects]=React.useState("")

    React.useEffect(()=>{
      console.log("A->"+ achivemnets)
      console.log("M->"+ membership)
      console.log("P->"+ projects)
    })
  return (
    <div>
   <small className="col mx-2" style={{ color: "red" }}>
       
        ("$" is considered as new bullet point)
      </small>

      <div className="row my-2">
        <h6>Professional Membership</h6>
        
      </div>
      <textarea value={localStorage.getItem("membership")} className="form-control row my-2"
      onChange={(e)=>{
        setMembership(e.target.value)
        localStorage.setItem("membership",e.target.value)
      }}
      />

      <div className="row my-2">
        <h6>Achievements & Awards</h6>
        
      </div>
      <textarea value={localStorage.getItem("achivemnets")}
       onChange={(e)=>{
        setAchievements(e.target.value)
        localStorage.setItem("achivemnets",e.target.value)
      }}
      className="form-control row my-2"/>
      <div className="row my-2">
        <h6>Major Projects Handled</h6>
        
      </div>
      <textarea value={localStorage.getItem("projects")}
       onChange={(e)=>{
        setProjects(e.target.value)
        localStorage.setItem("projects",e.target.value)
      }}
      className="form-control row my-2"/>
    </div>
  );
}
