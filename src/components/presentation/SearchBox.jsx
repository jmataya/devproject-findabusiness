// @flow
import React, { Component } from 'react';
import './SearchBox.css';

type Props = {
  defaultValue: string,
  onSubmit: Function,
};

type State = {
  value: string,
};

export default class SearchBox extends Component {
  props: Props;
  state: State = { value: this.props.defaultValue };

  static defaultProps = {
    defaultValue: "",
    onSubmit: () => {},
  };

  handleChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ value: e.target.value });
    }
  }

  handleKeyPress(e: Event) {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input className="input-field"
               type="text"
               placeholder="Search for a place or address"
               onChange={this.handleChange.bind(this)}
               onKeyPress={this.handleKeyPress.bind(this)}
               value={this.state.value}
        />
      </div>
    );
  }
}
