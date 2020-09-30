import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Save_Employee_From = "REACT.EmployeeForm";
function EmployeeTable(props) {
  const [employee, getEmployeed] = useState([]);

  useEffect(() => {
    PopulateEmployee();
  }, [props.value]);

  const PopulateEmployee = () => {
    const saveEmp = JSON.parse(localStorage.getItem(Save_Employee_From));
    if (saveEmp) {
      getEmployeed(saveEmp);
    }
  };

  const handledeleteEmployee = (id) => {
    if (window.confirm("Are you sure? Click OK to delete this record.")) {
      var newEmployeeList = employee.filter((emp) => emp.id != id);
      getEmployeed(newEmployeeList);
      localStorage.setItem(Save_Employee_From, JSON.stringify(newEmployeeList));
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="primary-heading">Employee List</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>
                    <input
                      className="btn btn-danger"
                      type="button"
                      value="x"
                      onClick={() => handledeleteEmployee(item.id)}
                    ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default EmployeeTable;
