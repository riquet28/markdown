// Ici on code notre App
import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
//JS PERSO
import { sampleText } from './sampleText';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea rows="35" className="form-control" value={ sampleText }></textarea>
          </div>
          <div className="col-sm-6">
            <div>
              <h1>{ sampleText }</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
