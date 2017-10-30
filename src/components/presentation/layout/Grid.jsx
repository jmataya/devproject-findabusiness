// @flow

import React, { Component, Element } from 'react'
import './Grid.css';

export default class Grid extends Component {
  props: { children?: string | Element<*> | Array<Element<*>> };

  render() {
    return (
      <div className="grid">
        {this.props.children}
      </div>
    );
  }
}
