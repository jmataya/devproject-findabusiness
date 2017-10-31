// @flow
import React, { Component } from 'react';
import './SearchResults.css';

import Column from './layout/Column';
import Row from './layout/Row';
import SmallHeader from './typography/SmallHeader';

type Result = {
  name: String,
  image: String,
  categories: Array<String>,
  rating: number,
  price_level: number,
};

type Props = {
  results: Array<Result>,
  searchTerm: String,
};

const formatPriceLevel = (level: number): String => {
  let price = '';
  for (let i = 0; i < level; i++) {
    price += '$';
  }
  return price;
};

const formatRating = (rating: number): String => {
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

const formatCategories = (categories: Array<String>): String => {
  if (categories.length > 0) {
    return categories[0].charAt(0).toUpperCase() + categories[0].slice(1);
  }

  return '';
}

export default class SearchResults extends Component {
  props: Props;

  get resultsMessage(): String {
    const { results, searchTerm } = this.props
    return `${results.length} results found for search "${searchTerm}:"`;
  }

  render() {
    const { results } = this.props;
    const resultList = results.map(res => {
      return (
        <Column width={4}>
          <a href="#" className="entry">
            <div className="image">
              <img src={res.image} alt="logo" />
            </div>
            <div className="details">
              <div className="name">{res.name}</div>
              <div className="info">
                <div className="rating">{formatRating(res.rating)}</div>
                <div className="price">&nbsp;- {formatPriceLevel(res.price_level)}</div>
              </div>
              <div className="about">
                <div className="category">{formatCategories(res.categories)}</div>
              </div>
            </div>
          </a>
        </Column>
      );
    });

    return (
      <div>
        <Row>
          <Column width={12}>
            <SmallHeader>
              {this.resultsMessage}
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
