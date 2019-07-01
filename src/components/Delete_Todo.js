import React, { Component } from "react";

export default class Delete_Todo extends Component {
  render() {
    return (
      <div className="container">
        {this.props.data.arr.map((val, i) => (
          <div className="todo">
            <input
              className="checkbox"
              onClick={() => this.props.checked(i)}
              type="checkbox"
            />
            <div>{val.text}</div>
            <button onClick={() => this.props.delete(i)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}
