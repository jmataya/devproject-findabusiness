// @flow
import React, { Component, Element } from 'react';

type PhotoResult = {
  getUrl: Function,
  height: number,
  width: number,
  html_attributes: Array<string>,
};

export type PlaceResult = {
  id: string,
  name: string,
  formatted_address: string,
  photos: Array<PhotoResult>,
  price_level: number,
  rating: number,
  types: Array<string>,
};

type PlacesService = {
  textSearch: Function,
};

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
  searchTerm: string,
};

type State = {
  results: Array<PlaceResult>,
};

export default class GooglePlaces extends Component {
  props: Props;
  state: State = { results: [] };
  service: PlacesService;

  componentDidMount() {
    if (window) {
      const mapDiv = document.createElement('div');
      const mapObj = new window.google.maps.Map(mapDiv);
      this.service = new window.google.maps.places.PlacesService(mapObj);
    }

    const { searchTerm } = this.props;
    if (searchTerm !== '') {
      this.handleSearch(searchTerm);
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { searchTerm } = this.props;
    const { searchTerm: nextSearchTerm } = nextProps;

    if (nextSearchTerm !== '' && searchTerm !== nextSearchTerm) {
      this.handleSearch(nextSearchTerm);
    }
  }

  handleSearch(query: string) {
    this.service.textSearch({ query }, results => {
      console.log(results);
      this.setState({ results });
    });
  }

  render() {
    const { searchTerm } = this.props;
    const { results } = this.state;

    const children = React.Children.toArray(this.props.children).map(child => {
      return React.cloneElement(child, { searchTerm, results });
    });

    return (
      <div>
        {children}
      </div>
    );
  }
}
