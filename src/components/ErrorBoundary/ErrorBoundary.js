// External libraries
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class DefaultErrorBoundary extends Component {
  static propTypes = {
    children: Proptypes.node.isRequired
  };

  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }
  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Something went wrong!</div> : children;
  }
}

export default DefaultErrorBoundary;
