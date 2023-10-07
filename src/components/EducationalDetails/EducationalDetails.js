import React, { useState } from 'react';

const EducationalDetails = () => {
  const storedMultiEducation=JSON.parse(localStorage.getItem("multiEducationDetails"))
  const [educations, setEducations] = useState(storedMultiEducation!=null?storedMultiEducation:[
    {
      institute: '',
      university: '',
      degree: '',
      from: '',
      to: '',
      remark: '',
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newEducations = [...educations];
    newEducations[index][name] = value;
    localStorage.setItem("multiEducationDetails",JSON.stringify(newEducations))
    setEducations(newEducations);

  };

  const addEducation = () => {
    const temp=[
      ...educations,
      {
        institute: '',
        university: '',
        degree: '',
        from: '',
        to: '',
        remark: '',
      },
    ]
    setEducations(temp);

    localStorage.setItem("multiEducationDetails",JSON.stringify(temp))

  };

  const removeEducation = (index) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    localStorage.setItem("multiEducationDetails",JSON.stringify(newEducations))

    setEducations(newEducations);
  };

  return (
    <div>
      <h2>Education Form</h2>

      <div className="mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Institute</th>
              
              <th>Degree</th>
              
              <th>Passed out year</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((element, index) => (
              <tr key={index}>
                <td>{element.institute}</td>
                <td>{element.degree}</td>
                <td>{element.to}</td>
                <td>{element.remark}</td>
                <td >
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeEducation(index)}
                  >
                   Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {educations.map((element, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header d-flex justify-content-between">
            Education {index + 1}
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => removeEducation(index)}
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
            </button>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Institute / University Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="institute"
                  value={element.institute}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  className="form-control"
                  name="degree"
                  value={element.degree}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              {/* <div className="col-md-6">
                <label className="form-label">University Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="university"
                  value={element.university}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div> */}
            </div>
            <div className="row mb-3">
             
              {/* <div className="col-md-3">
                <label className="form-label">From</label>
                <input
                  type="date"
                  className="form-control"
                  name="from"
                  value={element.from}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div> */}
              <div className="col-md-3">
                <label className="form-label">Passed Out year</label>
                <input
                  type="text"
                  className="form-control"
                  name="to"
                  value={element.to}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col">
                <label className="form-label">Remark</label>
                <input
                  type="text"
                  className="form-control"
                  name="remark"
                  value={element.remark}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
            </div>
            <div className="row mb-3">
             
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={addEducation}>
        Add Another Education
      </button>

     
    </div>
  );
};

export default EducationalDetails;
