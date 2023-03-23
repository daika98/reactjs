import React from "react";

class ChildComponent extends React.Component {
  render() {
    let { firstName, lastName, jobs } = this.props;
    return (
      <>
        <div>
          ChildComponent - {firstName} - {lastName}
          <br />
          <div>
            {jobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.job} - {item.salary}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default ChildComponent;
