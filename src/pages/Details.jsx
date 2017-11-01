// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BusinessDetails  from '../components/presentation/BusinessDetails';
import Header from '../components/presentation/Header';
import SmallHeader from '../components/presentation/typography/SmallHeader';

import GooglePlaces from '../components/container/GooglePlaces';

import './Details.css';

type Props = {
  history: {
    push: Function,
  },
  location: {
    params?: {
      from?: string,
      place?: PlaceResult,
    },
  },
  match: {
    params: { id: string }
  },
};

class Details extends Component {
  props: Props;

  goBack() {
    const { params } = this.props.location;
    const backTo = params && params.from
      ? params.from
      : '/';

    this.props.history.push(backTo);
  }

  render() {
    const placeId = this.props.match.params.id;
    return (
      <div>
        <Header onBack={this.goBack.bind(this)}>
          <div className="details-header">
            <SmallHeader>Business Details</SmallHeader>
          </div>
        </Header>
        <div className="detail-body">
          <GooglePlaces placeId={placeId}>
            <BusinessDetails />
          </GooglePlaces>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
