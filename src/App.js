import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PayrollForm from './components/payroll-form/payroll-form.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Employee Payroll App</h1>
          </header>
          <Routes>
            <Route path="/"           element={<div className="welcome"><h2>Welcome to Employee Payroll</h2></div>} />
            <Route path="/add"        element={<PayrollForm />} />
            <Route path="/edit/:id"   element={<PayrollForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;