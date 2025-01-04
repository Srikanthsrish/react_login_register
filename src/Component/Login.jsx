// src/Component/Login.jsx
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

class Login extends Component {
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

    const storedData = localStorage.getItem('data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const { username, email, password } = this.state;
      if (
        parsedData.username === username &&
        parsedData.email === email &&
        parsedData.password === password
      ) {
        alert('Login successful!');
        this.props.navigate('/home');
      } else {
        alert('Invalid credentials. Please register.');
        this.props.navigate('/register');
      }
    } else {
      alert('No user data found. Please register first.');
      this.props.navigate('/register');
    }
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="login-container">
        <h1>Login</h1>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default function LoginWrapper(props) {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}










  

