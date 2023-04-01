import React from "react";
import { toast } from "react-toastify";

class AddJob extends React.Component {
  state = {
    jobTitle: "",
    time: "",
  };

  changeTitleJob = (event) => {
    this.setState({
      jobTitle: event.target.value,
    });
  };

  changeTimeJob = (event) => {
    this.setState({
      time: event.target.value,
    });
  };

  addJobClick = (event) => {
    //let currentListJob = this.state.listJobs;
    if (!this.state.jobTitle || !this.state.time) {
      toast.error("Missing Data!!!");
      return;
    }
    let job = {
      id: Math.floor(Math.random() * 1000),
      jobTitle: this.state.jobTitle,
      time: this.state.time,
    };
    this.props.addJob(job);

    this.setState({
      jobTitle: "",
      time: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label>Job's Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job's Title"
              value={this.state.jobTitle}
              onChange={(event) => this.changeTitleJob(event)}
            />
          </div>
          <div className="form-group">
            <label>Time for Job</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter time for Job"
              onChange={(event) => this.changeTimeJob(event)}
            />
          </div>
          <div className="form-group form-check"></div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => this.addJobClick(event)}
          >
            Add Job
          </button>
        </form>
      </>
    );
  }
}

export default AddJob;
