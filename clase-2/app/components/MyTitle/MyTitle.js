import React, {PropTypes, Component} from 'react'

class MyTitle extends Component{
  static get propTypes(){
    return {
      text: PropTypes.number.isRequired
    }
  }

  render(){
    return (
      <h1>{this.props.text}</h1>
    )
  }
}

export default MyTitle
