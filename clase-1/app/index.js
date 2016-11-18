import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TituloComponent from './TituloComponent'
import Form from './Form'

const content = document.getElementById('content');

console.log('Hola Mundo');

ReactDOM.render(
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <TituloComponent/>
          <Form action="/" method="GET"/>

        </div>
      </div>
    </div>

  </div>
, content);
