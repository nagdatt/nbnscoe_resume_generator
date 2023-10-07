import React from "react";
const N = 40;
export default function ResearchGuidence() {
  const [publicationdetail, setDetailpublication] = React.useState(
    localStorage.getItem("details_of_publication")
  );

   const [conferencedetail, setDetailconference] = React.useState(
    localStorage.getItem("details_of_conference")
  );
  const [list_of_books_publisheddetail, setDetaillist_of_books_published] =
    React.useState(localStorage.getItem("detailed_list_of_books_published"));
  const [list_of_patentsdetail, setDetaillist_of_patents] = React.useState(
    localStorage.getItem("detailed_list_of_patents")
  );
  const [
    invited_as_resource_persondetail,
    setDetailinvited_as_resource_person,
  ] = React.useState(localStorage.getItem("invited_as_resource_person"));

  const [pgGuided, setpgGuided] = React.useState(
    localStorage.getItem("Research_phd_students")
  );

  const [phdGuided, setphdGuided] = React.useState(
    localStorage.getItem("Research_phd_students")
  );
  const [total_paper_publication, settotal_paper_publication] = React.useState(
    localStorage.getItem("total_paper_publication")
  );

  const [total_conference_publication, settotal_conference_publication] = React.useState(
    localStorage.getItem("total_conference_publication")
  );
  const [ugc_approved, setugc_approved] = React.useState(
    localStorage.getItem("ugc_approved")
  );
  const [scopus_indexed, setscopus_indexed] = React.useState(
    localStorage.getItem("scopus_indexed")
  );

  const [sci_indexed, setsci_indexed] = React.useState(
    localStorage.getItem("sci_indexed")
  );
  const [list_books_published, setlist_books_published] = React.useState(
    localStorage.getItem("list_books_published")
  );
  const [number_of_patents, setnumber_of_patents] = React.useState(
    localStorage.getItem("number_of_patents")
  );

  // React.useEffect(() => {
  //   localStorage.setItem("Research_pg_students", 0);
  //   localStorage.setItem("Research_phd_students", 0);
  //   localStorage.setItem("total_paper_publication", 0);
  //   localStorage.setItem("ugc_approved", 0);
  //   localStorage.setItem("scopus_indexed", 0);
  //   localStorage.setItem("sci_indexed", 0);
  //   localStorage.setItem("details_of_publication", "");

  //   localStorage.setItem("list_books_published", 0);
  //   localStorage.setItem("detailed_list_of_books_published", "");
  //   localStorage.setItem("number_of_patents", 0);
  //   localStorage.setItem("detailed_list_of_patents", "");
  //   localStorage.setItem("invited_as_resource_person", "");
  // }, []);
  return (
    <div>
      <div className="row">
        <h1 className="my-2 col">Research And Guidance</h1>
      </div>
    
      {/*  */}
      <div className="row my-2">
        <h6 className="col"> Number of PG Students Guiding / Guided  </h6>

        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
          
            if (e.target.value == "") {
              setpgGuided(parseInt(0));
              localStorage.setItem("Research_pg_students", 0);
            } else {
              setpgGuided(parseInt(e.target.value));
              localStorage.setItem(
                "Research_pg_students",
                parseInt(e.target.value)
              );
            }


          }}
          value={pgGuided}
        />
      </div>
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col"> Number of PhD Students Guiding / Guided</h6>

        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
            if (e.target.value == "") {
              setphdGuided(parseInt(0));
              localStorage.setItem("Research_phd_students", 0);
            } else {
              setphdGuided(parseInt(e.target.value));
              localStorage.setItem(
                "Research_phd_students",
                parseInt(e.target.value)
              );
            }
          }}
          value={phdGuided}
        />
      </div>
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col"> Total Journal Paper Publications</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
            

            if (e.target.value == "") {
              settotal_paper_publication(parseInt(0));
              localStorage.setItem("total_paper_publication", 0);
            } else {
              settotal_paper_publication(parseInt(e.target.value));
              localStorage.setItem(
                "total_paper_publication",
                parseInt(e.target.value)
              );
            }

          }}
          value={total_paper_publication}
        />
      </div>

      <div className="row my-2">
        <h6 className="col"> Total Conference Paper Publications</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
            

            if (e.target.value == "") {
              settotal_conference_publication(parseInt(0));
              localStorage.setItem("total_conference_publication", 0);
            } else {
              settotal_conference_publication(parseInt(e.target.value));
              localStorage.setItem(
                "total_conference_publication",
                parseInt(e.target.value)
              );
            }

          }}
          value={total_conference_publication}
        />
      </div>
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col">UGC Approved</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
           
            if (e.target.value == "") {
              setugc_approved(parseInt(0));
              localStorage.setItem("ugc_approved", 0);
            } else {
              setugc_approved(parseInt(e.target.value));
              localStorage.setItem(
                "ugc_approved",
                parseInt(e.target.value)
              );
            }


          }}
          value={ugc_approved}
        />
      </div>
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col">Scopus Indexed</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
       

               
            if (e.target.value == "") {
              setscopus_indexed(parseInt(0));
              localStorage.setItem("scopus_indexed", 0);
            } else {
              setscopus_indexed(parseInt(e.target.value));
              localStorage.setItem(
                "scopus_indexed",
                parseInt(e.target.value)
              );
            }

          }}
          value={scopus_indexed}
        />
      </div>
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col">SCI Indexed</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
      


            if (e.target.value == "") {
              setsci_indexed(parseInt(0));
              localStorage.setItem("sci_indexed", 0);
            } else {
              setsci_indexed(parseInt(e.target.value));
              localStorage.setItem(
                "sci_indexed",
                parseInt(e.target.value)
              );
            }

          }}
          value={sci_indexed}
        />
      </div>
      {/* end */}
      <small className="col" style={{ color: "red" }}>
        {" "}
        ("$" is considered as new bullet point for all below text feilds)
      </small> <br/>
      <small>Detailed Journal Publication list (In APA format)</small>
      <textarea
        className="form-control row my-2"
        placeholder="Detailed Journal Publication list"
        value={localStorage.getItem("details_of_publication")}
        onChange={(e) => {
          localStorage.setItem("details_of_publication", e.target.value);
          setDetailpublication(e.target.value);
        }}
      />

<small>Detailed Conference Publication list (In APA format)</small>

<textarea
        className="form-control row my-2"
        placeholder="Detailed Conference Publication list"
        value={localStorage.getItem("details_of_conference")}
        onChange={(e) => {
          localStorage.setItem("details_of_conference", e.target.value);
          setDetailconference(e.target.value);
        }}
      />
      {/*  */}
      <div className="row my-2">
        <h6 className="col">Number of Books</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
        

            if (e.target.value == "") {
              setlist_books_published(parseInt(0));
              localStorage.setItem("list_books_published", 0);
            } else {
              setlist_books_published(parseInt(e.target.value));
              localStorage.setItem(
                "list_books_published",
                parseInt(e.target.value)
              );
            }
          }}
          value={list_books_published}
        />
      </div>
      <textarea
        className="form-control row my-2"
        placeholder="Detailed List of Books Published"
        value={localStorage.getItem("detailed_list_of_books_published")}
        onChange={(e) => {
          localStorage.setItem(
            "detailed_list_of_books_published",
            e.target.value
          );
          setDetaillist_of_books_published(e.target.value);
        }}
      />
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col">Number Of Patents</h6>
        <input
          className="form-control col mx-2"
          type="number"
          onChange={(e) => {
            setnumber_of_patents(parseInt(e.target.value));
            localStorage.setItem("number_of_patents", parseInt(e.target.value));
          }}
          value={number_of_patents}
        />{" "}
      </div>{" "}
      <textarea
        className="form-control row my-2"
        placeholder="Detailed List of Patents"
        value={localStorage.getItem("detailed_list_of_patents")}
        onChange={(e) => {
          localStorage.setItem("detailed_list_of_patents", e.target.value);
          setDetaillist_of_patents(e.target.value);
        }}
      />
      <h6>Invited As Resource Person/ Expert/ Evaluator</h6>
      <textarea
        className="form-control row my-2"
        placeholder="Invited as Resource Person/ Expert/ Evaluator "
        value={localStorage.getItem("invited_as_resource_person")}
        onChange={(e) => {
          localStorage.setItem("invited_as_resource_person", e.target.value);
          setDetailinvited_as_resource_person(e.target.value);
        }}
      />
      {/* end */}
    </div>
  );
}
