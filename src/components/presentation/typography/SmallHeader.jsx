// @flow
import React, { Component, Element } from 'react';
import './SmallHeader.css';

export default class SmallHeader extends Component {
  props: { children?: string | Element<*> | Array<Element<*>> };

  render() {
    return (
      <h3 className="small-header">
        {this.props.children}
      </h3>
    );
  }
}
