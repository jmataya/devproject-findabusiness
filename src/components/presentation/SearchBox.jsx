// @flow
import React, { Component } from 'react';
import './SearchBox.css';

type Props = {
  defaultValue: string,
};

type State = {
  value: string,
};

export default class SearchBox extends Component {
  props: Props;
  state: State = { value: this.props.defaultValue };

  static defaultProps = {
    defaultValue: "",
  };

  handleChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    return (
      <div className="search-box">
        <input className="input-field"
               type="text"
               placeholder="Search for a place or address"
               onChange={this.handleChange.bind(this)}
               value={this.state.value}
        />
      </div>
    );
  }
}
