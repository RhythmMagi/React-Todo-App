import React, { Component } from 'react';
import './App.css';
import TodoContainer from './Containers/TodoContainer'

window.id = 0;

class App extends Component {


  render() {
    return (
      <div>
       <h1> React-Redux ToDo </h1>
       <TodoContainer/>
      </div>
    );
  }
}

export default App;
