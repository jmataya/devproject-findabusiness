import React, { Component } from 'react';

import Grid from '../components/presentation/layout/Grid';
import SearchBox from '../components/presentation/SearchBox';
import Header from '../components/presentation/Header';
import SearchResults from '../components/presentation/SearchResults';

type Props = {
  match: {
    params: {
      searchTerm: string,
    }
  }
}

const fakeData = [{
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 1,
  rating: 4.5,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 4,
  rating: 4.0,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 3,
  rating: 4.2,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 3,
  rating: 3.5,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 2,
  rating: 2.5,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 1,
  rating: 3.0,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 2,
  rating: 2.7,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 3,
  rating: 2.5,
}, {
  name: 'Pizza Palace',
  image: 'https://baconmockup.com/300/300/',
  categories: ['pizza', 'restaurant'],
  price_level: 4,
  rating: 1.5,
}]

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
          <SearchResults results={fakeData} searchTerm={searchTerm} />
        </Grid>
      </div>
    );
  }
}
