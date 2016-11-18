import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class InputComponent extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <input type={this.props.type} className="form-control" placeholder={this.props.placeholder}/>
    )
  }
}
