import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";

const Save_Employee_From = "REACT.EmployeeForm";
const initialObj = { name: "", job: "", id: 0 };
let flag = true;
function EmployeeForm(props) {
  //console.dir(props.match.params.id);
  const [employee, setemployee] = useState(initialObj);

  useEffect(() => {}, [employee]);

  const Insertemployee = (e) => {
    if (!employee.name || !employee.job) {
      alert("Please enter employee name and job");
      return;
    }
    if (employee.id === 0) {
      let emp = { ...employee }; // copying the old datas array

      const locatStoredEmp = JSON.parse(
        localStorage.getItem(Save_Employee_From)
      );
      if (locatStoredEmp) {
        var newId = getMax(locatStoredEmp, "id") + 1;
        emp.id = newId;
        locatStoredEmp.push(emp);
        localStorage.setItem(
          Save_Employee_From,
          JSON.stringify(locatStoredEmp)
        );
      } else {
        emp.id = 1;
        localStorage.setItem(Save_Employee_From, JSON.stringify([emp]));
      }
      setemployee(initialObj);
      flag = !flag;
    }
  };

  const onChange = (e) => {
    e.persist();
    setemployee({ ...employee, [e.target.id]: e.target.value });
  };

  //Added function to get max id
  function getMax(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
        max = arr[i];
    }
    return max;
  }
  //Added function to get max id

  return (
    <>
      <div className="container">
        {<EmployeeTable value={flag}></EmployeeTable>}
        <hr />
        <h2 className="primary-heading">Add Employee</h2>
        <form onSubmit={Insertemployee}></form>
        <div className="form-row">
          <div className="col-md-3"></div>
          <div className="form-group col-md-3">
            <label htmlFor="txtName" className="font-weight-bold">
              Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Employee Name"
              onChange={onChange}
              value={employee.name}
            ></input>
          </div>

          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="form-row">
          <div className="col-md-3"></div>
          <div className="form-group col-md-3">
            <label htmlFor="txtJob" className="font-weight-bold">
              Job
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-control"
              id="job"
              placeholder="Enter Job Title"
              onChange={onChange}
              value={employee.job}
            ></input>
          </div>
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="form-row">
          <div className="col-md-3"></div>
          <div className="form-group col-md-6 ">
            <input
              className="btn btn-success"
              type="submit"
              value="Submit"
              onClick={Insertemployee}
            ></input>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default EmployeeForm;
