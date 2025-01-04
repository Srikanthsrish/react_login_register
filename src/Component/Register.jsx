// src/Component/Register.jsx
import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    const userData = {
      username,
      email,
      password,
    };
    localStorage.setItem('data', JSON.stringify(userData));
    alert('User registered successfully!');
    this.props.navigate('/login');
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;







