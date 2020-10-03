import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import EmployeeTable from "./components/EmployeeForm";
import EmployeeForm from "./components/EmployeeForm";
it("renders App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.render(<EmployeeForm />, div);
  ReactDOM.render(<EmployeeTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});
