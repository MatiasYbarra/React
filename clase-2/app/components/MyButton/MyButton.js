import React, {PropTypes, Component} from 'react'

export default class MyButton extends Component{
  // handleClick(){
  //   this.props.onIncrementValue()
  }
  render(){
    return (<button className="btn btn-success" type="button" onClick={this.props.onIncrementValue}>{this.props.buttonName}</button>

    )
  }
}

MyButton.propTypes = {
  onIncrementValue: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
}
