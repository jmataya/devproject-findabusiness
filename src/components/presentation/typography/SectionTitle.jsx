// @flow
import React, { Component, Element} from 'react';
import './SectionTitle.css';

export default class SectionTitle extends Component {
  props: { children?: string | Element<*> | Array<Element<*>> };

  render() {
     return <div className="section-title">{this.props.children}</div>;
  }
}
