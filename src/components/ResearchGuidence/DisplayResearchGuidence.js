import React from "react";
import { fontSizeForResume } from "../staticDimentions";
const delimiter="$";
export default function DisplayResearchGuidence() {
  const [bool, setBool] = React.useState(false);
  React.useEffect(() => {
    const Research_pg_students = localStorage.getItem("Research_pg_students");
    const Research_phd_students = localStorage.getItem(
      "Research_phd_students"
    );
    const total_paper_publication = localStorage.getItem(
      "total_paper_publication"
    );
    const ugc_approved = localStorage.getItem("ugc_approved");
    const scopus_indexed = localStorage.getItem("scopus_indexed");
    const sci_indexed = localStorage.getItem("sci_indexed");
    const details_of_publication = localStorage.getItem(
      "details_of_publication"
    );
    const list_books_published = localStorage.getItem("list_books_published");
    const detailed_list_of_books_published = localStorage.getItem(
      "detailed_list_of_books_published"
    );
    const number_of_patents = localStorage.getItem("number_of_patents");
    const detailed_list_of_patents = localStorage.getItem(
      "detailed_list_of_patents"
    );
    const invited_as_resource_person = localStorage.getItem(
      "invited_as_resource_person"
    );

    if((Research_pg_students!= 0 || Research_phd_students!= 0 || total_paper_publication!= 0 || ugc_approved!= 0
        || scopus_indexed!= 0 || sci_indexed!= 0 ||  details_of_publication!="" || list_books_published != 0|| detailed_list_of_books_published!=""
        || number_of_patents!= 0 || detailed_list_of_patents!="" || invited_as_resource_person!= 0 || invited_as_resource_person!=""
        )

        &&(
          Research_pg_students!= null || Research_phd_students!= null || total_paper_publication!= null || ugc_approved!= null
          || scopus_indexed!= null || sci_indexed!= null||  details_of_publication!=null || list_books_published !=null|| detailed_list_of_books_published!=null
          || number_of_patents!= null || detailed_list_of_patents!=null || invited_as_resource_person!=null || invited_as_resource_person!=null

        )
        
        ){
       
                setBool(true)
           
    
        
    }


  });
  return (
    <>
      {bool ? (
        <>
          <tr>
            <td colSpan={2}>
              <h6>Research And Guidance</h6>
            </td>
          </tr>
          {localStorage.getItem("Research_pg_students") != 0 && localStorage.getItem("Research_pg_students") != null && (
            <tr>
              <td>
                <h6>Number of PG Students Guiding / Guided</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("Research_pg_students")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("Research_phd_students") != 0 && localStorage.getItem("Research_phd_students") != null && (
            <tr>
              <td>
                <h6>Number of PhD Students Guiding / Guided</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("Research_phd_students")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("invited_as_resource_person") != "" && localStorage.getItem("invited_as_resource_person") != null && (
            <tr>
              <td>
                <h6>Invited as Resource Person/ Expert/ Evaluator</h6>
              </td>
              <td>
               <p>
               <ul style={{fontSize:fontSizeForResume}}>
                  {localStorage.getItem("invited_as_resource_person")?.split(delimiter).map((e)=>{
                      if(e!=""){
                        return <li>{e}</li>
                      }
                      return ""
                })
                
                
                
                }
                </ul>
                
               </p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("total_paper_publication") != 0 &&  localStorage.getItem("total_paper_publication") != null &&(
            <tr>
              <td>
                <h6>Total Journal Paper Publications</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("total_paper_publication")}</p>
              </td>
            </tr>
          )}

{localStorage.getItem("total_conference_publication") != 0 &&  localStorage.getItem("total_conference_publication") != null &&(
            <tr>
              <td>
                <h6>Total Conference Paper Publications</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("total_conference_publication")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("ugc_approved") != 0 &&localStorage.getItem("ugc_approved") != null && (
            <tr>
              <td>
                <h6>UGC Approved</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("ugc_approved")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("scopus_indexed") != 0 && localStorage.getItem("scopus_indexed") != null && (
            <tr>
              <td>
                <h6>Scopus Indexed</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("scopus_indexed")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("sci_indexed") != 0 && localStorage.getItem("sci_indexed") != null &&  (
            <tr>
              <td>
                <h6>SCI Indexed</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("sci_indexed")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("details_of_publication") != "" &&  localStorage.getItem("details_of_publication") != null && (
            <tr>
              <td>
                <h6>Detailed Journal Publication list</h6>
              </td>
              <td>
                <p style={{fontSize:fontSizeForResume}}>
                  <ol>
                  {localStorage.getItem("details_of_publication")?.split(delimiter).map((e)=>{
                      if(e!=""){
                        return <li><i>{e}</i></li>
                      }
                      return ""
                })
                
                
                
                }
                </ol>
                </p>
              </td>
            </tr>
          )}
{localStorage.getItem("details_of_conference") != "" &&  localStorage.getItem("details_of_conference") != null && (
            <tr>
              <td>
                <h6>Detailed Conference Publication list</h6>
              </td>
              <td>
                <p style={{fontSize:fontSizeForResume}}>
                  <ol>
                  {localStorage.getItem("details_of_conference")?.split(delimiter).map((e)=>{
                      if(e!=""){
                        return <li><i>{e}</i></li>
                      }
                      return ""
                })
                
                
                
                }
                </ol>
                </p>
              </td>
            </tr>
          )}
          {/*  */}

          {localStorage.getItem("list_books_published") != 0 && localStorage.getItem("list_books_published") != null && (
            <tr>
              <td>
                <h6>Number Of Books Published</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("list_books_published")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {localStorage.getItem("detailed_list_of_books_published") != "" && localStorage.getItem("detailed_list_of_books_published") != null && (
            <tr>
              <td>
                <h6>Detailed List of Books Published</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>

                  <ol>
                  {localStorage.getItem("detailed_list_of_books_published")?.split(delimiter).map((e)=>{
                      if(e!=""){
                        return <li>{e}</li>
                      }
                      return ""
                })
                
                
                
                }
                </ol>
                </p>
              </td>
            </tr>
          )}
          {/*  */}

          {localStorage.getItem("number_of_patents") != 0 && localStorage.getItem("number_of_patents") != null  &&(
            <tr>
              <td>
                <h6>Number Of Patents</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>
                <p>{localStorage.getItem("number_of_patents")}</p>
              </td>
            </tr>
          )}

           {/*  */}

           {localStorage.getItem("detailed_list_of_patents") != "" &&  localStorage.getItem("detailed_list_of_patents") != null && (
            <tr>
              <td>
                <h6>Detailed List of Patents</h6>
              </td>
              <td style={{fontSize:fontSizeForResume}}>

               <p>
               <ol>
                  {localStorage.getItem("detailed_list_of_patents")?.split(delimiter).map((e)=>{
                      if(e!=""){
                        return <li>{e}</li>
                      }
                      return ""
                })
                
                
                
                }
                </ol>
               </p>
              </td>
            </tr>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
