import React, { Component } from "react";
import "./App.css";
import Users from "./Users";

export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    adress: "",
    age: "",
    search: "",
    users: [
      {
        id: 1,
        firstname: "Otabek",
        lastname: "Shukurov",
        adress: "Chilonzor",
        age: 27,
      },
    ],
  };
  addUser = () => {
    const { users, firstname, lastname, adress, age } = this.state;
    if ((firstname !== "" && lastname !== "", adress !== "", age !== "")) {
      users.push({
        firstname: firstname,
        lastname: lastname,
        adress: adress,
        age: age,
      });
      this.setState({
        value: "",
        users,
      });
    }
  };
  deleteUser = (index) => {
    const { users } = this.state;
    users.splice(index, 1);
    this.setState({
      users,
    });
  };
  render() {
    const { users, search } = this.state;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">Add User</h1>
              </div>
              <div className="card-body">
                <form>
                  <input
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
                    type="text"
                    className="form-control my-2"
                    placeholder="Firstname..."
                    value={this.state.value}
                    required
                  />
                  <input
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
                    type="text"
                    className="form-control my-2"
                    placeholder="Lastname..."
                    value={this.state.value}
                    required
                  />
                  <input
                    onChange={(e) => this.setState({ adress: e.target.value })}
                    type="text"
                    className="form-control my-2"
                    placeholder="Adress..."
                    value={this.state.value}
                    required
                  />
                  <input
                    onChange={(e) => this.setState({ age: e.target.value })}
                    type="text"
                    className="form-control my-2"
                    placeholder="Age..."
                    value={this.state.value}
                    required
                  />
                </form>
              </div>
              <div className="card-footer text-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.addUser}
                >
                  Add user
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-3">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
            />
          </div>
        </div>

        <Users users={users} search={search} />
      </div>
    );
  }
}
