import React from "react";

class AddComponent extends React.Component {
  state = {
    jobTitle: "",
    salary: "",
  };
  changeTitleJob = (event) => {
    this.setState({
      jobTitle: event.target.value,
    });
  };
  changeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  btnClick = (event) => {
    event.preventDefault();
    if (!this.state.jobTitle || !this.state.salary) {
      alert("No data");
      return;
    }
    this.props.addJob({
      id: Math.floor(Math.random() * 100),
      jobTitle: this.state.jobTitle,
      salary: this.state.salary,
    });
    this.setState({
      jobTitle: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job title</label>
          <br />
          <input
            type="text"
            value={this.state.jobTitle}
            onChange={(event) => this.changeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.changeSalary(event)}
          />
          <br />
          <button onClick={(event) => this.btnClick(event)}>Submit</button>
        </form>
        <br />
      </>
    );
  }
}
export default AddComponent;
