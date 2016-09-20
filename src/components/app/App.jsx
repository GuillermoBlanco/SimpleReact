import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.name = 'Will';
  }
  render() {
    return (
      <div className="App">
      Hello World!! This is {this.name}' First React Component
      </div>
    );
  }
}

/* Stateless-component
   -------------------
const App = () => (
 <div>Hello World!! This is My First Component</div>
);
export default App;
*/