import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Grid from '../components/presentation/layout/Grid';
import Header from '../components/presentation/Header';
import SearchResults from '../components/presentation/SearchResults';
import SmallHeader from '../components/presentation/typography/SmallHeader';

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
            <SmallHeader>Search Results</SmallHeader>
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
