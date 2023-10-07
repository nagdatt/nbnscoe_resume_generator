import React from 'react'
import { fontSizeForResume } from '../staticDimentions'
const delemeter="$"
export default function DisplayOthers() {

    
    const [achivemnets,setAchievements]=React.useState(localStorage.getItem("achivemnets"))
    const [membership,setMembership]=React.useState(localStorage.getItem("membership"))
    const [projects,setProjects]=React.useState(localStorage.getItem("projects"))

    React.useEffect(()=>{

    })
  return (
    <>
    {
        ((achivemnets!="" && achivemnets!=null)  ||( membership!="" && membership!=null) || (projects!=""    && projects!=null))?(

            <>
            <tr>
                <td colSpan={2}>
                    <h6>
                        Other Activities
                    </h6>
                </td>
            </tr>
            {
                achivemnets!="" && achivemnets!=null && (
                    <tr>
                        <td>
                            <h6>
                            Achievements & Awards
                            </h6>
                        </td>
                        <td style={{fontSize:fontSizeForResume}}>
                        <p>
                               <ol>
                               {achivemnets?.split(delemeter).map((e)=>{
                                if(e!="")
                                   return <p><li>{e}</li></p>
                                })}
                               </ol>
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
                        <td style={{fontSize:fontSizeForResume}}>
                            <p>
                                
                                <ol>
                               {membership?.split(delemeter).map((e)=>{
                                if(e!="")
                                   return <p><li>{e}</li></p>
                                })}
                               </ol>
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
                <td style={{fontSize:fontSizeForResume}}>
                    <p>
                        {}
                        <ol>
                               {projects?.split(delemeter).map((e)=>{
                                    if(e!="")
                                   return <p><li>{e}</li></p>
                                })}
                               </ol>
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
