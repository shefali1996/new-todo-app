import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import Nav from "./components/Nav";
import ShowTodo from "./components/ShowTodo";
import DeleteTodo from "./components/DeleteTodo";
import EditTodo from "./components/EditTodo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      text: "",
      error: ""
    };
  }

  submit = () => {
    if (this.state.text !== "") {
      const todo = {
        text: this.state.text,
        completed: false,
        check: false,
        edit: false,
        save: false,
        text1: this.state.text
      };
      this.setState({
        arr: this.state.arr.concat(todo),
        text: ""
      });
    }
    if (this.state.text === "") {
      this.setState({
        error: "red"
      });
    }
  };

  enterKey = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      this.submit();
    }
    if (e.key === "Enter" && e.target.value === "") {
      this.setState({
        error: "red"
      });
    }
  };

  getValue = e => {
    this.setState({
      text: e.target.value,
      error: "blue"
    });
  };

  delete = i => {
    this.setState({
      arr: this.state.arr.filter((v, index, arr) => {
        return arr.indexOf(v) !== i;
      })
    });
  };

  checked = i => {
    let newState = { ...this.state };
    newState.arr[i].check = !this.state.arr[i].check;
    this.setState({
      ...newState
    });
    console.log(this.state.arr);
  };

  edit = i => {
    let newState = { ...this.state };
    newState.arr[i].edit = !this.state.arr[i].edit;
    this.setState({
      ...newState
    });
  };

  save = i => {
    let newState = { ...this.state };
    newState.arr[i].text = newState.arr[i].text1;
    newState.arr[i].edit = !this.state.arr[i].edit;
    this.setState({
      ...newState
    });
  };

  getValue1 = (e, i) => {
    let newState = { ...this.state };
    newState.arr[i].text1 = e.target.value;
    this.setState({
      ...newState
    });
  };


  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            render={() => (
              <HomePage
                data={this.state}
                submit={this.submit}
                getValue={this.getValue}
                enterKey={this.enterKey}
              />
            )}
            exact
            path="/"
          />
          <Route
            render={() => (
              <ShowTodo
                data={this.state}
                submit={this.submit}
                checked={this.checked}
              />
            )}
            path="/show-todo"
          />
          <Route
            render={() => (
              <DeleteTodo
                data={this.state}
                submit={this.submit}
                delete={this.delete}
              />
            )}
            path="/delete-todo"
          />
          <Route
            render={() => (
              <EditTodo
                edit={this.edit}
                getValue1={this.getValue1}
                save={this.save}
                data={this.state}
              />
            )}
            path="/edit-todo"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
