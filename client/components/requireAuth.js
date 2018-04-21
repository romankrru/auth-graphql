import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import query from '../queries/currentUser';

const requireAuth = WrappedComponent => {
  class RequireAuth extends Component {
    componentDidUpdate() {
      if (!this.props.data.user && !this.props.data.loading) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(query)(RequireAuth);
}

export default requireAuth;
