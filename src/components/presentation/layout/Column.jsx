// @flow
import React, { Component, Element } from 'react';

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
  offset: number,
  width: number,
};

export default class Column extends Component {
  props: Props;

  static defaultProps = {
    offset: 0,
    width: 12,
  };

  render() {
    const { children, offset, width } = this.props;

    // CSS grids, somewhat unintuitively uses a 1-based index for the starting
    // position. Convert it to 0-based (which makes more sense with offset).
    const start = offset + 1
    const end = start + width

    let style = {
      gridColumnStart: start,
      gridColumnEnd: end,
    };

    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}
