import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home.jsx';
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
          <div className="App-content">
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/add"      element={<PayrollForm />} />
              <Route path="/edit/:id" element={<PayrollForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;