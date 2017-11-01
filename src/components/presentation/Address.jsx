// @flow
import React, { Component } from 'react';

type Props = {
  components: Array<AddressComponent>,
};

type AddressMap = { [key: string]: AddressComponent }

export default class Address extends Component {
  props: Props;

  processComponents(components: Array<AddressComponent>): AddressMap {
    return components.reduce((acc, component) => {
      if (component.types.length === 0) {
        return acc;
      }

      // Use the first entry in the type array as a key. There
      // might be a place where we see duplicates, but it hasn't
      // shown up in data.
      const key = component.types[0];
      return { ...acc, [key]: component };
    }, {});
  }

  render() {
    const {
      street_number: streetNumber,
      route: streetName,
      locality: city,
      administrative_area_level_1: state,
      postal_code: postal,
    } = this.processComponents(this.props.components);

    // There are a few instances where the street number isn't present.
    // This handles that (somewhat inelegantly).
    const tryStreetNum = streetNumber ? streetNumber.long_name : '';

    const lineOne = `${tryStreetNum} ${streetName.long_name}`;
    const lineTwo = `${city.long_name}, ${state.short_name} ${postal.long_name}`;

    return (
      <div>
        <div>{lineOne}</div>
        <div>{lineTwo}</div>
      </div>
    );
  }
}
