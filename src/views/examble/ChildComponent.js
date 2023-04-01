import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  btnDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { jobs } = this.props;
    let showJobs = this.state.showJobs;
    return (
      <>
        {!showJobs ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {jobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.jobTitle} - {item.salary}
                    <button
                      key={item.key}
                      className="ml-2"
                      onClick={() => this.btnDelete(item)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
