// @flow
import React, { Component, Element } from 'react';
import Address from './Address';
import Detail from './Detail';

type Props = {
  result: FullPlaceResult,
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
    const { result } = this.props;

    return (
      <div className="details">
        <Detail title="Business">
          {result.name}
        </Detail>
        <Detail title="Phone Number">
          {result.international_phone_number}
        </Detail>
        <Detail title="Email">
          {result.email}
        </Detail>
        <Detail title="Address">
          <Address components={result.address_components} />
        </Detail>
        <Detail title="Categories">
          {formatCategories(result.types)}
        </Detail>
      </div>

    )
  }
}
