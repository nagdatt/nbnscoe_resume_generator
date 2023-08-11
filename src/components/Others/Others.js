import React from "react";

export default function Others() {

    const [achivemnets,setAchievements]=React.useState("")
    const [membership,setMembership]=React.useState("")
    const [projects,setProjects]=React.useState("")
  return (
    <div>
      <div className="row my-2">
        <h1>Others</h1>
      </div>

      <div className="row my-2">
        <h6>Professional Membership</h6>
        
      </div>
      <textarea value={sessionStorage.getItem("achivemnets")} className="form-control row my-2"
      onChange={(e)=>{
        setAchievements(e.target.value)
        sessionStorage.setItem("achivemnets",e.target.value)
      }}
      />

      <div className="row my-2">
        <h6>Achievements & Awards</h6>
        
      </div>
      <textarea value={sessionStorage.getItem("membership")}
       onChange={(e)=>{
        setAchievements(e.target.value)
        sessionStorage.setItem("membership",e.target.value)
      }}
      className="form-control row my-2"/>
      <div className="row my-2">
        <h6>Major Projects Handled</h6>
        
      </div>
      <textarea value={sessionStorage.getItem("projects")}
       onChange={(e)=>{
        setAchievements(e.target.value)
        sessionStorage.setItem("projects",e.target.value)
      }}
      className="form-control row my-2"/>
    </div>
  );
}
