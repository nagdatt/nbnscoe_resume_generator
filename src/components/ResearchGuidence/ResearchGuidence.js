import React from "react";
const N = 40;
export default function ResearchGuidence() {
  const [publicationdetail,setDetailpublication]=React.useState(sessionStorage.getItem("details_of_publication"))
  const [list_of_books_publisheddetail,setDetaillist_of_books_published]=React.useState(sessionStorage.getItem("detailed_list_of_books_published"))
  const [list_of_patentsdetail,setDetaillist_of_patents]=React.useState(sessionStorage.getItem("detailed_list_of_patents"))
  const [invited_as_resource_persondetail,setDetailinvited_as_resource_person]=React.useState(sessionStorage.getItem("invited_as_resource_person"))

  // React.useEffect(() => {
  //   sessionStorage.setItem("Research_pg_students", 0);
  //   sessionStorage.setItem("Research_phd_students", 0);
  //   sessionStorage.setItem("total_paper_publication", 0);
  //   sessionStorage.setItem("ugc_approved", 0);
  //   sessionStorage.setItem("scopus_indexed", 0);
  //   sessionStorage.setItem("sci_indexed", 0);
  //   sessionStorage.setItem("details_of_publication", "");

  //   sessionStorage.setItem("list_books_published", 0);
  //   sessionStorage.setItem("detailed_list_of_books_published", "");
  //   sessionStorage.setItem("number_of_patents", 0);
  //   sessionStorage.setItem("detailed_list_of_patents", "");
  //   sessionStorage.setItem("invited_as_resource_person", "");
  // }, []);
  return (
    <div>
      <div className="row my-2">
        <h1 className="my-2 col">Research And Guidence</h1>
      </div>
      <h6 className="col mx-2" style={{color:"red"}}>      ("$" is considered as new bullet point)
</h6>
      {/*  */}
      <div className="row my-2">
        <h6 className="col"> Number of PG Students Guided</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
         
          onChange={(e) => {
            sessionStorage.setItem("Research_pg_students",parseInt( e.target.value))
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      {/* end */}

      {/*  */}
      <div className="row my-2">
        <h6 className="col"> Number of PhD Students Guided</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
          onChange={(e) => {
            sessionStorage.setItem("Research_phd_students", parseInt(e.target.value));
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      {/* end */}
      {/*  */}
      <div className="row my-2">
        <h6 className="col"> Total Paper Publications</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
          onChange={(e) => {
            sessionStorage.setItem("total_paper_publication", parseInt(e.target.value));
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      {/* end */}

      {/*  */}
      <div className="row my-2">
        <h6 className="col">UGC Approved</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
          onChange={(e) => {
            sessionStorage.setItem("ugc_approved", parseInt(parseInt(e.target.value)));
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      {/* end */}

      {/*  */}
      <div className="row my-2">
        <h6 className="col">Scopus Indexed</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
          onChange={(e) => {
            sessionStorage.setItem("scopus_indexed",parseInt( e.target.value));
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      {/* end */}

      {/*  */}
      <div className="row my-2">
        <h6 className="col">SCI Indexed</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
          onChange={(e) => {
            sessionStorage.setItem("sci_indexed", parseInt(e.target.value));
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      {/* end */}
      <textarea
        className="form-control row my-2"
        placeholder="Detailed Publication list"
        value={ sessionStorage.getItem("details_of_publication")}
        onChange={(e) => {
          sessionStorage.setItem("details_of_publication",  e.target.value);
          setDetailpublication(e.target.value)
        }}
      />
      {/*  */}
      <div className="row my-2">
        <h6 className="col">Number of Books</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"
          value={ sessionStorage.getItem("list_books_published")}

          onChange={(e) => {
            sessionStorage.setItem("list_books_published", parseInt(e.target.value));
            setDetaillist_of_books_published(e.target.value)
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      <textarea
        className="form-control row my-2"
        placeholder="Detailed List of Books Published"
        value={ sessionStorage.getItem("detailed_list_of_books_published")}
        onChange={(e) => {
          sessionStorage.setItem(
            "detailed_list_of_books_published",
            e.target.value
          );
          setDetaillist_of_books_published(e.target.value)
        }}
      />
      {/* end */}

      {/*  */}
      <div className="row my-2">
        <h6 className="col">Number Of Patents</h6>
        <select
          name="FdpCount"
          id="FdpCount"
          class="form-select col mx-2"

          onChange={(e) => {
            sessionStorage.setItem("number_of_patents", parseInt(e.target.value));
          }}
        >
          {[...Array(N).keys()].map((index) => {
            return <option key={index}>{index}</option>;
          })}
        </select>
      </div>
      <textarea
        className="form-control row my-2"
        placeholder="Detailed List of Patents"
        value={ sessionStorage.getItem("detailed_list_of_patents")}

        onChange={(e) => {
          sessionStorage.setItem("detailed_list_of_patents", e.target.value);
          setDetaillist_of_patents(e.target.value)
        }}
      />
      <h6>Invited As Resource Person/ Expert/ Evaluator</h6>
      <textarea
        className="form-control row my-2"
        placeholder="Invited as Resource Person/ Expert/ Evaluator "
        value={ sessionStorage.getItem("invited_as_resource_person")}

        onChange={(e) => {
          sessionStorage.setItem("invited_as_resource_person", e.target.value);
          setDetailinvited_as_resource_person(e.target.value)
        }}
      />

      {/* end */}
    </div>
  );
}
