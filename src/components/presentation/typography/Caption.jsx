// @flow
import React, { Component, Element } from 'react';
import './Caption.css';

export default class Caption extends Component {
  props: { children?: string | Element<*> | Array<Element<*>> };

  render() {
    return <div className="caption">{this.props.children}</div>;
  }
}
