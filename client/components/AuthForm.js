import React, { Component } from 'react';

class AuthForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="email" className="active">Email</label>

            <input
              id="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password" className="active">Password</label>

            <input
              id="password"
              value={this.state.password}
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>

          {this.props.errors.map((err, i) => (
            <div key={i} className="errors">{err}</div>
          ))}

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;