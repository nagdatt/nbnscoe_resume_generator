// src/FdpSttpWorkshopTracker.js
import React, { useState } from 'react';

function MoocComponentUI() {
  const [entries, setEntries] = useState(JSON.parse(localStorage.getItem("mooc_or_othercourse"))!=null?JSON.parse(localStorage.getItem("mooc_or_othercourse")):[]);
  const [title, setTitle] = useState('');
  const [organizedBy, setOrganizedBy] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [duration, setDuration] = useState('');

  React.useEffect(()=>{
    localStorage.setItem("mooc_or_othercourse",JSON.stringify(entries));
  },[entries])

  const removeEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    localStorage.setItem("mooc_or_othercourse",JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };
  const addEntry = () => {
    if (title && organizedBy && fromDate && toDate && duration) {
      setEntries([
        ...entries,
        {
          title,
          organizedBy,
          fromDate,
          toDate,
          duration
        },
      ]);
      const temp=[
        ...entries,
        {
          title,
          organizedBy,
          fromDate,
          toDate,
          duration
        },
      ]
      console.log(temp)
    
      setTitle('');
      setOrganizedBy('');
      setFromDate('');
      setToDate('');
      setDuration('')
    }
    else{
      alert("Please fill all fields")
    }
  };

  return (
    <div className="container mt-4">
      <h6>Mooc / Courses Attended</h6>
      <div className="row">
     
       
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Organized By</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Duration</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.title}</td>
                  <td>{entry.organizedBy}</td>
                  <td>{entry.fromDate}</td>
                  <td>{entry.toDate}</td>
                  <td>{entry.duration}</td>
                  

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeEntry(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Add Entry</h6>
              <div className='row'>
              <div className="form-group col">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group col">
                <label>Organized By</label>
                <input
                  type="text"
                  className="form-control"
                  value={organizedBy}
                  onChange={(e) => setOrganizedBy(e.target.value)}
                />
              </div>
              </div>
              <div className='row'>
              <div className="form-group col">
                <label>From Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div className="form-group col">
                <label>To Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              <div className="form-group col">
                <label>Duration</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='1 Week'
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              </div>
              <button className="btn btn-danger col-12 mt-2"  onClick={addEntry}>
                Add
              </button>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default MoocComponentUI;