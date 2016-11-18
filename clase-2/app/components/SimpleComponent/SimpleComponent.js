import React, {PropTypes, Component} from 'react'

import MyTille from '../MyTitle/MyTitle'
import MyButton from '../MyButton/'

export default class SimpleComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      numero: 0
    }
  }
  incrementValue(){
    this.setState({numero: this.state.numero + 1})
    this.testIncValue()
  }
  decrementValue(){
    if(this.state.numero >0){
      this.setState({numero: this.state.numero - 1})
    }
    this.testDecValue()
  }
  testIncValue(){
    console.log("esta sumando");
  }
  testDecValue(){
    console.log("esta restando");
  }
  resetValue(){
    this.setState({numero: this.state.numero = 0})
  }

  render(){
    return(<div>

        <MyTitle text={this.state.numero}/>
        <MyButton onIncrementValue={this.incrementValue.bind(this)} buttonName={this.props.buttonName}/>
        <MyButton onIncrementValue={this.decrementValue.bind(this)} buttonName="-"/>
        <MyButton onIncrementValue={this.resetValue.bind(this)} buttonName="reset"/>
    </div>

    )
  }
}
