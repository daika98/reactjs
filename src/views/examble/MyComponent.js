import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    jobs: [
      { id: "1", jobTitle: "Dev1", salary: "100" },
      { id: "2", jobTitle: "Dev2", salary: "200" },
      { id: "3", jobTitle: "Dev3", salary: "300" },
    ],
  };
  addJob = (job) => {
    this.setState({
      jobs: [...this.state.jobs, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.jobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      jobs: currentJob,
    });
  };
  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} />
        <ChildComponent jobs={this.state.jobs} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default MyComponent;
