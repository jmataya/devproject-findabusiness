// @flow
import React, { Component } from 'react';
import clarifai from 'clarifai';

type ClarifaiApp = {
  predict: Function,
};

type Props = {
  url: string,
};

export default class Clarifai extends Component {
  app: { models: ClarifaiApp };
  props: Props;
  state: { summary: string } = { summary: '' };

  componentDidMount() {
    this.app = new clarifai.App(
      'NO18sIhXk9nZDkAdVXNPSThzPXPI8wHn78vAncxe',
      'c2vHENnTnNj6XdFkXCEWbG1g1oSdBmTqOTO44eP9',
    );

    this.fetch(this.props.url);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.url !== nextProps.url) {
      this.fetch(nextProps.url);
    }
  }

  fetch(url: string) {
    const action = () => this.app.models.predict(clarifai.GENERAL_MODEL, url).then(
      res => this.handleResults(res),
      err => console.err(err),
    );

    this.setState({ summary: '' }, action);
  }

  handleResults(res: ClarifaiResult) {
    if (res.outputs.length > 0) {
      // Limit ourselves to 5 concepts.
      const concepts = res.outputs[0].data.concepts.slice(0, 5);

      // Join them into a comma separated list.
      const summary = concepts.reduce((acc, concept) => {
        const sep = acc === '' ? '' : ', ';
        return `${acc}${sep}${concept.name}`;
      }, '');

      this.setState({ summary });
    }
  }

  render() {
    return <div>{this.state.summary}</div>;
  }
}
