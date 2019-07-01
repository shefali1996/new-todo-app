import React, { Component} from "react";
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home_Page from './components/Home_Page'
import './App.css';
import Nav from './components/Nav';
import Show_Todo from './components/Show_Todo'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      text: ""
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
      console.log(this.state.arr);
    }
  };

  getValue=(e)=>{
    this.setState({
      text:e.target.value
    })
  }

  checked = i => {
    let newState = { ...this.state };
    newState.arr[i].check = !this.state.arr[i].check;
    this.setState({
      ...newState
    });
  };

  render() {
    console.log(this.state.arr)
    return (
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Home_Page data={this.state} 
          submit={this.submit}
          getValue={this.getValue}
          Route exact path="/" component={Home_Page}/>
          <Show_Todo data={this.state} 
          submit={this.submit}
          checked={this.checked}
          Route path="/show-todo" component={Show_Todo}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
