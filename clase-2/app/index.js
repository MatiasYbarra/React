import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

const content = document.getElementById('content');

class SimpleComponent extends Component{
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
class MyButton extends Component{
  handleClick(){
    this.props.onIncrementValue()
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

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <div >
          <SimpleComponent
          titulo="Esto es un titulo"
          buttonName="+"/>
        </div>
      </div>
    </div>
  </div>


, content);
