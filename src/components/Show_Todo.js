import React, { Component } from 'react'

export default class Show_Todo extends Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.data.arr.map((val,i)=>
                        <div className="todo">
                            <input className="checkbox" onClick={()=>this.props.checked(i)} type="checkbox"></input>
                            <div>{val.text}</div>
                            {this.props.data.arr[i].check && "Complete"}
                        </div>
                    )
                }
            </div>
        )
    }
}
