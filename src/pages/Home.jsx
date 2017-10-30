// @flow
import React, { Component } from 'react';
import './Home.css';

import Column from '../components/presentation/layout/Column';
import Grid from '../components/presentation/layout/Grid';
import Row from '../components/presentation/layout/Row';
import SearchBox from '../components/presentation/SearchBox';
import Title from '../components/presentation/typography/Title';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid>
          <Row>
            <Column offset={3} width={6}>
              <Title>Find a Business</Title>
            </Column>
          </Row>
          <Row>
            <Column offset={3} width={6}>
              <SearchBox />
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}
