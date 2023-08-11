import React from 'react'

export default function DisplayOthers() {

    
    const [achivemnets,setAchievements]=React.useState(sessionStorage.getItem("achivemnets"))
    const [membership,setMembership]=React.useState(sessionStorage.getItem("membership"))
    const [projects,setProjects]=React.useState(sessionStorage.getItem("projects"))

    React.useEffect(()=>{

    })
  return (
    <>
    {
        (achivemnets!=""  && membership!="" && projects!="" && achivemnets!=null  && membership!=null && projects!=null)?(

            <>
            <tr>
                <td colSpan={2}>
                    <h6>
                        Other Activities
                    </h6>
                </td>
            </tr>
            {
                achivemnets!="" && (
                    <tr>
                        <td>
                            <h6>
                            Achievements & Awards
                            </h6>
                        </td>
                        <td>
                            <p>
                                {achivemnets}
                            </p>
                        </td>
                    </tr>
                )
            }

{
                membership!="" && (
                    <tr>
                        <td>
                            <h6>
                            Professional Memberships
                            </h6>
                        </td>
                        <td>
                            <p>
                                {membership}
                            </p>
                        </td>
                    </tr>
                )
            }

{
        projects!="" && (
            <tr>
                <td>
                    <h6>
                    Major Projects Handled
                    </h6>
                </td>
                <td>
                    <p>
                        {projects}
                    </p>
                </td>
            </tr>
        )
    }
            
            </>
        ):""
    } 
    

    
    </>
  )
}
