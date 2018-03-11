import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../queries/currentUser';

class Header extends Component {
  render() {
    return (
      <header>
        header
      </header>
    );
  }
}

export default graphql(query)(Header);