import React, { useState } from 'react';

const TeachingExperienceForm = () => {
  const [experiences, setExperiences] = useState(
   localStorage.getItem("multiplTeachingExp")==null? [{
    institute: '',
    designation: '',
    from: '',
    to: '',
    totalExpYears: '',
    totalExpMonths: '',
    approved: false,
  }]: JSON.parse(localStorage.getItem("multiplTeachingExp"))
  );
console.log(experiences)
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    localStorage.setItem("multiplTeachingExp",JSON.stringify(newExperiences))

    setExperiences(newExperiences);
  };

  const handleCheckboxChange = (index) => {
    const newExperiences = [...experiences];
    newExperiences[index].approved = !newExperiences[index].approved;
    localStorage.setItem("multiplTeachingExp",JSON.stringify(newExperiences))

    setExperiences(newExperiences);
  };

  const addExperience = () => {
    let temp=[
        ...experiences,
        {
          institute: '',
          designation: '',
          from: '',
          to: '',
          totalExpYears: '',
          totalExpMonths: '',
          approved: false,
        },
      ]
    setExperiences(temp);
    
      localStorage.setItem("multiplTeachingExp",JSON.stringify(temp))
  };

  const removeExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    localStorage.setItem("multiplTeachingExp",JSON.stringify(newExperiences))


    setExperiences(newExperiences);
  };

  return (
    <div className='my-2'>
      {experiences.map((experience, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header d-flex justify-content-between">
            Teaching Experience {index + 1}
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => removeExperience(index)}
            >
              Remove
            </button>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Institute Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="institute"
                  value={experience.institute}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={experience.designation}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">From</label>
                <input
                  type="date"
                  className="form-control"
                  name="from"
                  value={experience.from}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col">
                <label className="form-label">To</label>
                <input
                  type="date"
                  className="form-control"
                  name="to"
                  value={experience.to}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Total Exp (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  name="totalExpYears"
                  value={experience.totalExpYears}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col">
                <label className="form-label">Total Exp (Months)</label>
                <input
                  type="number"
                  className="form-control"
                  name="totalExpMonths"
                  value={experience.totalExpMonths}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`approved${index}`}
                checked={experience.approved}
                onChange={() => handleCheckboxChange(index)}
              />
              <label className="form-check-label" htmlFor={`approved${index}`}>
                Approved
              </label>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={addExperience}>
        Add Another Teaching Experience
      </button>
    </div>
  );
};

export default TeachingExperienceForm;
