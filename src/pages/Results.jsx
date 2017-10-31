import React, { Component } from 'react';

import Grid from '../components/presentation/layout/Grid';
import SearchBox from '../components/presentation/SearchBox';
import Header from '../components/presentation/Header';
import SearchResults from '../components/presentation/SearchResults';

import GooglePlaces from '../components/container/GooglePlaces';

type Props = {
  match: {
    params: {
      searchTerm: string,
    }
  }
}

export default class Results extends Component {
  props: Props;

  render() {
    const { searchTerm } = this.props.match.params;

    return (
      <div>
        <Header>
          <SearchBox defaultValue={searchTerm} />
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
