import React from "react";
const delimiter="$";
export default function DisplayResearchGuidence() {
  const [bool, setBool] = React.useState(false);
  React.useEffect(() => {
    const Research_pg_students = sessionStorage.getItem("Research_pg_students");
    const Research_phd_students = sessionStorage.getItem(
      "Research_phd_students"
    );
    const total_paper_publication = sessionStorage.getItem(
      "total_paper_publication"
    );
    const ugc_approved = sessionStorage.getItem("ugc_approved");
    const scopus_indexed = sessionStorage.getItem("scopus_indexed");
    const sci_indexed = sessionStorage.getItem("sci_indexed");
    const details_of_publication = sessionStorage.getItem(
      "details_of_publication"
    );
    const list_books_published = sessionStorage.getItem("list_books_published");
    const detailed_list_of_books_published = sessionStorage.getItem(
      "detailed_list_of_books_published"
    );
    const number_of_patents = sessionStorage.getItem("number_of_patents");
    const detailed_list_of_patents = sessionStorage.getItem(
      "detailed_list_of_patents"
    );
    const invited_as_resource_person = sessionStorage.getItem(
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
              <h6>Research And Guidence</h6>
            </td>
          </tr>
          {sessionStorage.getItem("Research_pg_students") != 0 && sessionStorage.getItem("Research_pg_students") != null && (
            <tr>
              <td>
                <h6>Number of PG Students Guidance</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("Research_pg_students")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("Research_phd_students") != 0 && sessionStorage.getItem("Research_phd_students") != null && (
            <tr>
              <td>
                <h6>Number of PhD Students Guidance</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("Research_phd_students")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("invited_as_resource_person") != "" && sessionStorage.getItem("invited_as_resource_person") != null && (
            <tr>
              <td>
                <h6>Invited as Resource Person/ Expert/ Evaluator</h6>
              </td>
              <td>
               <p>
               <ul>
                  {sessionStorage.getItem("invited_as_resource_person")?.split(delimiter).map((e)=>{
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

          {sessionStorage.getItem("total_paper_publication") != 0 &&  sessionStorage.getItem("total_paper_publication") != null &&(
            <tr>
              <td>
                <h6>Total Paper Publications</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("total_paper_publication")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("ugc_approved") != 0 &&sessionStorage.getItem("ugc_approved") != null && (
            <tr>
              <td>
                <h6>UGC Approved</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("ugc_approved")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("scopus_indexed") != 0 && sessionStorage.getItem("scopus_indexed") != null && (
            <tr>
              <td>
                <h6>Scopus Indexed</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("scopus_indexed")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("sci_indexed") != 0 && sessionStorage.getItem("sci_indexed") != null &&  (
            <tr>
              <td>
                <h6>SCI Indexed</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("sci_indexed")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("details_of_publication") != "" &&  sessionStorage.getItem("details_of_publication") != null && (
            <tr>
              <td>
                <h6>Detailed Publication list</h6>
              </td>
              <td>
                <p>
                  <ol>
                  {sessionStorage.getItem("details_of_publication")?.split(delimiter).map((e)=>{
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

          {sessionStorage.getItem("list_books_published") != 0 && sessionStorage.getItem("list_books_published") != null && (
            <tr>
              <td>
                <h6>Number Of Books Published</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("list_books_published")}</p>
              </td>
            </tr>
          )}

          {/*  */}

          {sessionStorage.getItem("detailed_list_of_books_published") != "" && sessionStorage.getItem("detailed_list_of_books_published") != null && (
            <tr>
              <td>
                <h6>Detailed List of Books Published</h6>
              </td>
              <td>
                <p>

                  <ol>
                  {sessionStorage.getItem("detailed_list_of_books_published")?.split(delimiter).map((e)=>{
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

          {sessionStorage.getItem("number_of_patents") != 0 && sessionStorage.getItem("number_of_patents") != null  &&(
            <tr>
              <td>
                <h6>Number Of Patents</h6>
              </td>
              <td>
                <p>{sessionStorage.getItem("number_of_patents")}</p>
              </td>
            </tr>
          )}

           {/*  */}

           {sessionStorage.getItem("detailed_list_of_patents") != "" &&  sessionStorage.getItem("detailed_list_of_patents") != null && (
            <tr>
              <td>
                <h6>Detailed List of Patents</h6>
              </td>
              <td>

               <p>
               <ol>
                  {sessionStorage.getItem("detailed_list_of_patents")?.split(delimiter).map((e)=>{
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
