import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    jobs: [
      { id: "1", job: "Dev1", salary: "100" },
      { id: "2", job: "Dev2", salary: "200" },
      { id: "3", job: "Dev3", salary: "300" },
    ],
  };

  changeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
    //console.log("", event.target.value);
  };
  changeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  btnClick = (event) => {
    event.preventDefault();
    console.log("Data", this.state);
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.changeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.changeLastName(event)}
          />
          <br />

          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.btnClick(event)}
          />
        </form>
        <br />
        <ChildComponent
          // jobs={this.state.jobs}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          jobs={this.state.jobs}
        />
      </>
    );
  }
}
export default MyComponent;
