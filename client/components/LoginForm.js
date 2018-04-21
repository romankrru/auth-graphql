import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/login';
import query from '../queries/currentUser';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
    };
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch(err => {
      const errors = err.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);