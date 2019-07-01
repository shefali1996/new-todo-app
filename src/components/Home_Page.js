import React, { Component } from "react";
import '../../src/App.css'
import {Link} from 'react-router-dom';

export default class Home_Page extends Component {
  render() {
    return (
      <div>
        <h2>Todo</h2>
          <input
            placeholder="Your Todo..."
            type="text"
            value={this.props.data.text}
            onChange={this.props.getValue}
          />
        <Link to="/show-todo"><button onClick={this.props.submit}>Submit</button></Link>
      </div>
    );
  }
}
