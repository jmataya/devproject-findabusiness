// @flow
import React, { Component } from 'react';
import Address from './Address';
import Column from './layout/Column';
import Detail from './Detail';
import Gallery from './Gallery';
import Row from './layout/Row';

type Props = {
  place?: FullPlaceResult,
};

const formatCategories = (categories: Array<string>): string => {
  return categories.reduce((acc, cat) => {
    const formatted = cat.charAt(0).toUpperCase() + cat.slice(1);
    const connector = acc !== '' ? ', ' : '';
    return `${acc}${connector}${formatted.replace(/_/g, ' ')}`;
  }, '');
};

export default class BusinessDetails extends Component {
  props: Props;

  render() {
    const { place } = this.props;
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
      <Row>
        <Column width={6}>
          <Gallery images={imageDetails} />
        </Column>
        <Column width={6}>
          <div className="details">
            <Detail title="Business">
              {place.name}
            </Detail>
            <Detail title="Phone Number">
              {place.international_phone_number}
            </Detail>
            {place.email && (
              <Detail title="Email">{place.email}</Detail>
            )}
            <Detail title="Address">
              <Address components={place.address_components} />
            </Detail>
            <Detail title="Categories">
              {formatCategories(place.types)}
            </Detail>
          </div>
        </Column>
      </Row>
    );
  }
}
