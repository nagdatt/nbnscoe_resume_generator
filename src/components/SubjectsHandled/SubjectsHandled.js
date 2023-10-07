import React from "react";

export default function SubjectsHandled() {
  const [ug, setUg] = React.useState("");
  const [pg, setPg] = React.useState("");
  React.useEffect(() => {}, [ug, pg]);
  return (
    <div className="row my-2 ">
      <div class="form-group">
        <label for="exampleInputEmail1"><h6>Undergraduate</h6></label>
        <textarea
          className="form-control col my-4"
          value={localStorage.getItem("ug")}
          onChange={(e) => {
            setUg(e.target.value);
            localStorage.setItem("ug", e.target.value);
          }}
          placeholder="UG"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1"><h6>Postgraduate</h6></label>
        <textarea
          value={localStorage.getItem("pg")}
          className="form-control col my-4"
          onChange={(e) => {
            localStorage.setItem("pg", e.target.value);
            setPg(e.target.value);
          }}
          placeholder="PG"
        />
      </div>
    </div>
  );
}
