// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

import Column from './layout/Column';
import Row from './layout/Row';
import SectionTitle from './typography/SectionTitle';
import SmallHeader from './typography/SmallHeader';

type Props = {
  results: Array<PlaceResult>,
  searchTerm: string,
};

const formatPriceLevel = (level: number): string => {
  let price = '';
  for (let i = 0; i < level; i++) {
    price += '$';
  }
  return price;
};

const formatRating = (rating: number): string => {
  const solidStars = Math.round(rating);
  const emptyStars = 5 - solidStars;

  let ratingSymbol = `${rating} `;
  for (let i = 0; i < solidStars; i++) {
    ratingSymbol += '★';
  }
  for (let i = 0; i < emptyStars; i++) {
    ratingSymbol += '☆';
  }

  return ratingSymbol;
}

const formatCategories = (categories: Array<string>): string => {
  if (categories.length > 0) {
    return categories[0].charAt(0).toUpperCase() + categories[0].slice(1);
  }

  return '';
}

export default class SearchResults extends Component {
  props: Props;

  resultsMessage() {
    const { results, searchTerm } = this.props
    return `${results.length} results found for search "${searchTerm}":`;
  }

  getImage(result: PlaceResult) {
    const { photos } = result;
    if (photos && photos.length > 0) {
      const url = photos[0].getUrl({maxWidth: 65, maxHeight: 65});
      return <img src={url} alt={result.name} />;
    } else {
      return <div className="placeholder"></div>;
    }
  }

  render() {
    const { results, searchTerm } = this.props;
    const resultList = results.map(res => {
      return (
        <Column width={6}>
          <Link className="entry"
                to={{
                  pathname: `/details/${res.place_id}`,
                  params: {
                    place: res,
                    from: `/results/${searchTerm}`,
                  },
                }}
          >
            <div className="image">{this.getImage(res)}</div>
            <div className="details">
              <div className="name">
                <SectionTitle>{res.name}</SectionTitle>
              </div>
              <div className="info">
                {res.rating && (
                  <div className="rating">
                    {formatRating(res.rating)}
                  </div>
                )}
                {(res.rating && res.price_level) && (
                  <div> - </div>
                )}
                {res.price_level && (
                  <div className="price">
                    {formatPriceLevel(res.price_level)}
                  </div>
                )}
              </div>
              <div className="about">
                <div className="category">{formatCategories(res.types)}</div>
              </div>
            </div>
          </Link>
        </Column>
      );
    });

    return (
      <div>
        <Row>
          <Column width={12}>
            <SmallHeader>
              {this.resultsMessage()}
            </SmallHeader>
          </Column>
        </Row>
        <Row>
          {resultList}
        </Row>
      </div>
    );
  }
}
