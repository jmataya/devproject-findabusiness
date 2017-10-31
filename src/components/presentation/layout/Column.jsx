// @flow
import React, { Component, Element } from 'react';

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
  offset?: number,
  width: number,
};

export default class Column extends Component {
  props: Props;

  render() {
    const { children, offset, width } = this.props;

    // CSS grids, somewhat unintuitively uses a 1-based index for the starting
    // position. Convert it to 0-based (which makes more sense with offset).
    let style = {};
    if (offset) {
      style = {
        gridColumnStart: offset + 1,
        gridColumnEnd: offset + width + 1,
      };
    } else {
      style = {
        gridColumnEnd: `span ${width}`
      };
    }

    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}
