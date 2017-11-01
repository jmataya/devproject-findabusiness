import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Grid from '../components/presentation/layout/Grid';
import SearchBox from '../components/presentation/SearchBox';
import Header from '../components/presentation/Header';
import SearchResults from '../components/presentation/SearchResults';

import GooglePlaces from '../components/container/GooglePlaces';

import './Results.css';

type Props = {
  match: {
    params: {
      searchTerm: string,
    }
  }
}

class Results extends Component {
  props: Props;

  render() {
    const { searchTerm } = this.props.match.params;

    return (
      <div>
        <Header>
          <div className="results-header">
            <SearchBox defaultValue={searchTerm}
                       onCancel={() => this.props.history.push('/')}
            />
          </div>
        </Header>
        <Grid>
          <GooglePlaces searchTerm={searchTerm}>
            <SearchResults />
          </GooglePlaces>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Results);
