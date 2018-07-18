import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();

    }

  render() {
    return (
        <div>
            <div>
                <input type='button' value="All" className="buts"/>
                <input type='button' value="Pending"  className="buts"/>
                <input type='button' value="Accepted" className="buts"/>
            </div>
        </div>
    );
  }
}

export default App;
