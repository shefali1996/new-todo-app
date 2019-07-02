import React, { Component } from "react";

export default class Edit_Todo extends Component {
  render() {
    return (
      <div className="container">
        {this.props.data.arr.map((val, i) => (
          <div className="todo" key={i}>
            <div className="val">{val.text}</div>
            {this.props.data.arr[i].edit && (
              <input
                type="text"
                onChange={e => this.props.getValue1(e, i)}
                value={this.props.data.arr[i].text1}
              />
            )}
            <button
              onClick={
                this.props.data.arr[i].edit
                  ? () => this.props.save(i)
                  : () => this.props.edit(i)
              }
            >
              {this.props.data.arr[i].edit ? "Save" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
