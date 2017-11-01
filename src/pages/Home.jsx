// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';

import Column from '../components/presentation/layout/Column';
import Grid from '../components/presentation/layout/Grid';
import Row from '../components/presentation/layout/Row';
import SearchBox from '../components/presentation/SearchBox';
import Title from '../components/presentation/typography/Title';

type Props = {
  history: {
    push: Function,
  },
};

class Home extends Component {
  props: Props;

  onSearch = (searchTerm: string) => {
    this.props.history.push(`/results/${searchTerm}`);
  };

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
              <SearchBox onSubmit={this.onSearch} />
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Home);
