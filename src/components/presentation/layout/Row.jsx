// @flow
import React, { Component, Element } from 'react';
import './Row.css';

export default class Row extends Component {
  props: { children?: string | Element<*> | Array<Element<*>> };

  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}
