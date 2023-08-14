import React from "react";

export default function SubjectsHandled() {
  const [ug, setUg] = React.useState("");
  const [pg, setPg] = React.useState("");
  React.useEffect(() => {}, [ug, pg]);
  return (
    <div className="row my-2 ">
      <h1 className="my-2 col">Subjects Handled </h1>
      <div class="form-group">
        <label for="exampleInputEmail1"><h6>Undergraduate</h6></label>
        <textarea
          className="form-control col my-4"
          value={sessionStorage.getItem("ug")}
          onChange={(e) => {
            setUg(e.target.value);
            sessionStorage.setItem("ug", e.target.value);
          }}
          placeholder="UG"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1"><h6>Postgraduate</h6></label>
        <textarea
          value={sessionStorage.getItem("pg")}
          className="form-control col my-4"
          onChange={(e) => {
            sessionStorage.setItem("pg", e.target.value);
            setPg(e.target.value);
          }}
          placeholder="PG"
        />
      </div>
    </div>
  );
}
