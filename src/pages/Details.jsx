// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Address from '../components/presentation/Address';
import BusinessDetails  from '../components/presentation/BusinessDetails';
import Column from '../components/presentation/layout/Column';
import Gallery from '../components/presentation/Gallery';
import Header from '../components/presentation/Header';
import Row from '../components/presentation/layout/Row';
import SmallHeader from '../components/presentation/typography/SmallHeader';

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

type State = {
  place: ?FullPlaceResult,
};

class Details extends Component {
  props: Props;
  state: State = { place: null };

  componentDidMount() {
    const { params } = this.props.location;
    if (params && params.place) {
      const fakePlace = {
        ...params.place,
        international_phone_number: '+12489104608',
        email: 'jeff.mataya@gmail.com',
        website: 'www.donkey.com',
        address_components : [
          {
            long_name : "1600",
            short_name : "1600",
            types : [ "street_number" ]
          },
          {
            long_name : "Amphitheatre Pkwy",
            short_name : "Amphitheatre Pkwy",
            types : [ "route" ]
          },
          {
            long_name : "Mountain View",
            short_name : "Mountain View",
            types : [ "locality", "political" ]
          },
          {
            long_name : "Santa Clara County",
            short_name : "Santa Clara County",
            types : [ "administrative_area_level_2", "political" ]
          },
          {
            long_name : "California",
            short_name : "CA",
            types : [ ("administrative_area_level_1"), "political" ]
          },
          {
            long_name : "United States",
            short_name : "US",
            types : [ "country", "political" ]
          },
          {
            long_name : "94043",
            short_name : "94043",
            types : [ "postal_code" ]
          }
        ],
      }
      this.setState({ place: fakePlace });
    }
  }

  goBack() {
    const { params } = this.props.location;
    const backTo = params && params.from
      ? params.from
      : '/';

    this.props.history.push(backTo);
  }

  render() {
    const { place } = this.state;
    if (!place) {
      return <div></div>;
    }

    const imageDetails = (place.photos || []).map(photo => {
      return {
        url: photo.getUrl({ maxWidth: 800, maxHeight: 1000 }),
        alt: place.name,
        caption: ['one', 'two', 'dog'],
      };
    });

    return (
      <div>
        <Header onBack={this.goBack.bind(this)}>
          <div className="details-header">
            <SmallHeader>Business Details</SmallHeader>
          </div>
        </Header>
        <div className="detail-body">
          <Row>
            <Column width={6}>
              <Gallery images={imageDetails} />
            </Column>
            <Column width={6}>
              <BusinessDetails result={place} />
            </Column>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
