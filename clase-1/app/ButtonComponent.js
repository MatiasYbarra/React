import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <button  className="btn btn-info btn-block" type={this.props.type}>{this.props.text}</button>
    )
  }
}
