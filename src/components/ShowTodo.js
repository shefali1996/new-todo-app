import React, { Component } from "react";

export default class Show_Todo extends Component {

  render() {
    return (
      <div className="container">
        {this.props.data.arr.map((val, i) => (
          <div className="todo" key={i}>
            <input
              className="checkbox"
              onClick={() => this.props.checked(i)}
              type="checkbox"
              checked={this.props.data.arr[i].check}
            />
            <div className="val">{val.text}</div>
            {this.props.data.arr[i].check && "Complete"}
          </div>
        ))}
      </div>
    );
  }
}
