// @flow
import React, { Component } from 'react';
import './SearchBox.css';

type Props = {
  defaultKeyword: string,
  defaultZipcode: string,
  onSubmit: Function,
};

type State = {
  keyword: string,
  zipcode: string,
  error: string,
};

export default class SearchBox extends Component {
  props: Props;
  state: State = {
    keyword: this.props.defaultKeyword,
    zipcode: this.props.defaultZipcode,
    error: '',
  };

  static defaultProps = {
    defaultKeyword: '',
    defaultZipcode: '',
    onSubmit: (k: string, z: string) => {},
  };

  handleKeywordChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.setState({
        keyword: e.target.value,
        error: '',
      });
    }
  }

  handleZipChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.setState({
        zipcode: e.target.value,
        error: '',
      });
    }
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    const { keyword, zipcode } = this.state;
    if (keyword === '' && zipcode === '') {
      this.setState({ error: 'Please provide a keyword and zip code.' });
    } else if (keyword === '') {
      this.setState({ error: 'Please provide a keyword.' });
    } else if (zipcode === '') {
      this.setState({ error: 'Please provide a zipcode.' });
    } else {
      this.props.onSubmit(keyword, zipcode);
    }
  }

  render() {
    const { error, keyword, zipcode } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {error !== '' && (
          <div className="error-message">{error}</div>
        )}
        <div className="search-box">
          <input className="input-field"
                 type="text"
                 placeholder="Business name or keyword"
                 onChange={this.handleKeywordChange.bind(this)}
                 value={keyword}
          />
        </div>
        <div className="search-box">
          <input className="input-field"
                 type="text"
                 placeholder="Zipcode"
                 onChange={this.handleZipChange.bind(this)}
                 value={zipcode}
          />
        </div>
        <button type="submit" className="search">
          Search
        </button>
      </form>
    );
  }
}
