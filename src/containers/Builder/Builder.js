import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class Builder extends Component {
  render() {
    return (
      <>
        <Burger />
        <div>Builder Controls</div>
      </>
    );
  }
}

export default Builder;
