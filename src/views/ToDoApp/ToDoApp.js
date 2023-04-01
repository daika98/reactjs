import React from "react";
import "./ToDoApp.scss";
import AddJob from "./AddJob";
import { toast } from "react-toastify";
class ToDoApp extends React.Component {
  state = {
    listJobs: [
      { id: "1", jobTitle: "Dev1", time: "100" },
      { id: "2", jobTitle: "Dev2", time: "200" },
      { id: "3", jobTitle: "Dev3", time: "300" },
    ],
    editJob: {},
  };

  addJob = (job) => {
    this.setState({
      listJobs: [...this.state.listJobs, job],
    });
    toast.success("Succesfully!!!");
  };
  deleteJob = (job) => {
    let currentJob = this.state.listJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      listJobs: currentJob,
    });
    toast.success("Item is delete!!!");
  };

  editJob = (job) => {
    let { listJobs, editJob } = this.state;
    let isObEmpty = Object.keys(editJob).length === 0;
    if (isObEmpty === false && editJob.id === job.id) {
      // console.log("Hello", editJob.id);
      let listJobsCopy = [...listJobs];

      let objIndex = listJobsCopy.findIndex((item) => item.id === job.id);

      // Update object's name property.
      listJobsCopy[objIndex].jobTitle = editJob.jobTitle;
      listJobsCopy[objIndex].time = editJob.time;
      this.setState({
        listJobs: listJobsCopy,
        editJob: {},
      });
      toast.success("Edit item sucessfully");
      return;
    }
    //edit
    this.setState({
      editJob: job,
    });
  };

  handleOnChangeEditJob = (event) => {
    let editJobCopy = { ...this.state.editJob };
    editJobCopy.jobTitle = event.target.value;
    this.setState({
      editJob: editJobCopy,
    });
  };

  handleOnChangeEditTime = (event) => {
    let editJobCopy = { ...this.state.editJob };
    editJobCopy.time = event.target.value;
    this.setState({
      editJob: editJobCopy,
    });
  };

  render() {
    let { listJobs, editJob } = this.state;
    let isObEmpty = Object.keys(editJob).length === 0;
    // console.log("Data", isObEmpty);

    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="container container-bk m-3">
            <AddJob addJob={this.addJob} />
            <table className="table table-hover mt-4">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Job Title</th>
                  <th>Time for Job</th>
                  <th className="col-1"></th>
                  <th className="col-1"></th>
                </tr>
              </thead>

              <tbody>
                {listJobs.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      {isObEmpty === true ? (
                        <>
                          <td>{item.jobTitle}</td>
                          <td>{item.time}</td>
                        </>
                      ) : editJob.id === item.id ? (
                        <>
                          <td>
                            <input
                              value={editJob.jobTitle}
                              onChange={(event) =>
                                this.handleOnChangeEditJob(event)
                              }
                            />
                          </td>
                          <td>
                            <input
                              value={editJob.time}
                              onChange={(event) =>
                                this.handleOnChangeEditTime(event)
                              }
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{item.jobTitle}</td>
                          <td>{item.time}</td>
                        </>
                      )}

                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => this.editJob(item)}
                        >
                          {isObEmpty === false && editJob.id === item.id
                            ? "Save"
                            : "Edit"}
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.deleteJob(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ToDoApp;
