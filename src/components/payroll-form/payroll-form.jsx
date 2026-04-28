import React, { Component } from 'react';
import './payroll-form.scss';

class PayrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profileImage: '',
      gender: '',
      department: [],
      salary: '',
      startDate: '',
      note: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleDepartmentChange = (e) => {
    const { value, checked } = e.target;
    this.setState(prevState => {
      const dept = [...prevState.department];
      if (checked) {
        dept.push(value);
      } else {
        const idx = dept.indexOf(value);
        if (idx > -1) dept.splice(idx, 1);
      }
      return { department: dept };
    });
  }

  validateForm = () => {
    const { name, gender, salary, startDate } = this.state;
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!gender)       errors.gender = 'Gender is required';
    if (!salary)       errors.salary = 'Salary is required';
    if (!startDate)    errors.startDate = 'Start Date is required';
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) return;
    const employeeData = {
      name:         this.state.name,
      profileImage: this.state.profileImage,
      gender:       this.state.gender,
      department:   this.state.department,
      salary:       this.state.salary,
      startDate:    this.state.startDate,
      note:         this.state.note
    };
    console.log('Employee Data:', employeeData);
    alert('Employee saved (form submit - UC2)');
  }

  handleReset = () => {
    this.setState({
      name: '', profileImage: '', gender: '',
      department: [], salary: '', startDate: '', note: '', errors: {}
    });
  }

  render() {
    const { name, gender, salary, startDate, note, errors } = this.state;
    return (
      <div className="payroll-form-container">
        <div className="payroll-form-header">
          <h2>Employee Payroll Form</h2>
        </div>
        <form className="payroll-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter employee name"
              onChange={this.handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Profile Image URL</label>
            <input
              type="text"
              name="profileImage"
              value={this.state.profileImage}
              placeholder="Enter image URL"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label><input type="radio" name="gender" value="Male"   onChange={this.handleChange} checked={gender === 'Male'}   /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={this.handleChange} checked={gender === 'Female'} /> Female</label>
            </div>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label>Department</label>
            <div className="checkbox-group">
              {['HR','Finance','Engineering','Sales','Marketing'].map(dept => (
                <label key={dept}>
                  <input
                    type="checkbox"
                    value={dept}
                    checked={this.state.department.includes(dept)}
                    onChange={this.handleDepartmentChange}
                  /> {dept}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Salary</label>
            <select name="salary" value={salary} onChange={this.handleChange}>
              <option value="">Select Salary</option>
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
              <option value="50000">50,000</option>
              <option value="100000">1,00,000</option>
            </select>
            {errors.salary && <span className="error">{errors.salary}</span>}
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={this.handleChange}
            />
            {errors.startDate && <span className="error">{errors.startDate}</span>}
          </div>

          <div className="form-group">
            <label>Note</label>
            <textarea
              name="note"
              value={note}
              placeholder="Additional notes..."
              rows="3"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit"  className="btn-save">Save</button>
            <button type="button"  className="btn-reset" onClick={this.handleReset}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PayrollForm;