import React, { Component } from "react";

export default class Delete_Todo extends Component {
  render() {
    return (
      <div className="container">
        {this.props.data.arr.map((val, i) => (
          <div className="todo" key={i}>
            <div className="val">{val.text}</div>
            <button onClick={() => this.props.delete(i)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}
