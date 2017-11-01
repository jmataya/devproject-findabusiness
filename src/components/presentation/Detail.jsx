// @flow
import React, { Component, Element } from 'react';
import SectionTitle from './typography/SectionTitle';
import './Detail.css';

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
  title: string,
};

export default class Detail extends Component {
  props: Props;

  render() {
    const { children, title } = this.props;

    return (
      <div className="detail">
        <SectionTitle>{title}</SectionTitle>
        <div className="detail-info">{children}</div>
      </div>
    );
  }
}
