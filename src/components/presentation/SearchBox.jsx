// @flow
import React, { Component } from 'react';
import './SearchBox.css';

type Props = {
  defaultValue: string,
  onCancel?: Function,
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
    onSubmit: (s: string) => {},
  };

  handleCancel() {
    const cancelFn = this.props.onCancel
      ? this.props.onCancel
      : () => {};
    this.setState({ value: '' }, cancelFn);
  }

  handleChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ value: e.target.value });
    }
  }

  handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    return (
      <div className="search-box">
        <div className="search-icon">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <input className="input-field"
               type="text"
               placeholder="Search for a place or address"
               onChange={this.handleChange.bind(this)}
               onKeyPress={this.handleKeyPress.bind(this)}
               value={this.state.value}
        />
        {this.state.value !== '' && (
          <div className="cancel-icon" onClick={this.handleCancel.bind(this)}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        )}
      </div>
    );
  }
}
