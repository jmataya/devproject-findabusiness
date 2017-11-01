// @flow

import React, { Component, Element } from 'react';
import './Title.css';

export default class Title extends Component {
  props: { children?: string | Element<*> | Array<Element<*>> };

  render() {
    return (
      <h1 className="title">
        {this.props.children}
      </h1>
    );
  }
}
