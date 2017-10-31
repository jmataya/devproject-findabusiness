import React, { Component } from 'react';

import Column from './layout/Column';
import Grid from './layout/Grid';
import Row from './layout/Row';

import './Header.css';

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
};

export default class Header extends Component {
  props: Props;

  render() {
    return (
      <div className="header">
        <Grid>
          <Row>
            <Column offset={4} width={4}>
              {this.props.children}
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}
