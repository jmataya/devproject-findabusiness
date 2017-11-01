// @flow
import React, { Component, Element } from 'react';

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
  placeId?: string,
  searchTerm?: string,
};

type State = {
  isFetching: bool,
  results: Array<PlaceResult>,
  place: ?FullPlaceResult,
};

export default class GooglePlaces extends Component {
  props: Props;

  state: State = {
    isFetching: true,
    results: [],
    place: null,
  };

  service: {
    getDetails: Function,
    textSearch: Function,
  };

  componentDidMount() {
    if (window) {
      const mapDiv = document.createElement('div');
      const mapObj = new window.google.maps.Map(mapDiv);
      this.service = new window.google.maps.places.PlacesService(mapObj);
    }

    const searchTerm = this.props.searchTerm || '';
    if (searchTerm !== '') {
      this.handleSearch(searchTerm);
    }

    const placeId = this.props.placeId || '';
    if (placeId !== '') {
      this.handleGetDetails(placeId);
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const searchTerm = this.props.searchTerm || '';
    const nextSearchTerm = nextProps.searchTerm || '';

    if (nextSearchTerm !== '' && searchTerm !== nextSearchTerm) {
      this.handleSearch(nextSearchTerm);
    }

    const placeId = this.props.placeId || '';
    const nextPlaceId = nextProps.placeId || '';

    if (nextPlaceId !== '' && placeId !== nextPlaceId) {
      this.handleGetDetails(nextPlaceId);
    }
  }

  handleSearch(query: string) {
    this.setState({
      isFetching: true,
    }, this.service.textSearch({ query }, this.searchCallback.bind(this)));
  }

  searchCallback(results: Array<PlaceResult>) {
    this.setState({
      isFetching: false,
      results,
    });
  }

  handleGetDetails(placeId: string) {
    this.setState({
      isFetching: true,
    }, () => this.service.getDetails({ placeId }, this.detailsCallback.bind(this)));
  }

  detailsCallback(place: FullPlaceResult, status: string) {
    this.setState({
      isFetching: false,
      place,
    });
  }

  render() {
    const { isFetching, results, place } = this.state;
    if (isFetching) {
      return <div>Loading...</div>;
    }

    const { searchTerm } = this.props;

    const children = React.Children.toArray(this.props.children).map(child => {
      return React.cloneElement(child, { searchTerm, results, place });
    });

    return (
      <div>
        {children}
      </div>
    );
  }
}
