import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'


export default class Form extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <form action={this.props.action} method={this.props.method}>
        <div className="form-grup">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"></input><br/>
          <label htmlFor="exampleInputNombre">First Name</label>
          <InputComponent type="text" placeholder="ingrese su nombre"/><br/>
          <ButtonComponent type="submit" className="btn-btn" text="enviar"/>
        </div>
      </form>
    )
  }
}
