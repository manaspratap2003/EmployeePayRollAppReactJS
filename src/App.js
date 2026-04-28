import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Employee Payroll App'
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>{this.state.title}</h1>
            <p>Hello World from BridgeLabz!</p>
          </header>
          <Routes>
            <Route path="/" element={<div className="welcome"><h2>Welcome to Employee Payroll</h2></div>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;