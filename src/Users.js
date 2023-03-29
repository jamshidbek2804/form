import React, { Component } from "react";

export default class Users extends Component {
  deleteUser = (index) => {
    console.log(index);
    const { users } = this.props;
    users.splice(index, 1);
    this.setState({
      users,
    });
  };
  render() {
    const { users, search } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-8 offset-2">
            <table className="table table-bordered table-hover table-stripped mt-3">
              <thead>
                <tr className="text-center">
                  <th>T/R</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Adress</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((item) => {
                    if (item.firstname === search) {
                      return item;
                    } else if (
                      item.firstname
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return item;
                    } else if (
                      item.lastname
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.adress}</td>
                        <td>{item.age}</td>
                        <td>
                          {
                            <button
                              className="btn btn-danger"
                              onClick={() => this.deleteUser(index)}
                            >
                              Delete
                            </button>
                          }
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
