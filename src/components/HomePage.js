import React, { Component } from "react";
import "../../src/App.css";

export default class Home_Page extends Component {
  render() {
    
    return (
      <div className="container">
        <h2>Todo</h2>
        <input
          placeholder="Your Todo..."
          type="text"
          className={this.props.data.error + " textbox"}
          value={this.props.data.text}
          onChange={this.props.getValue}
          onKeyPress={this.props.enterKey}
        />
        <button onClick={this.props.submit}>Submit</button>
      </div>
    );
  }
}
