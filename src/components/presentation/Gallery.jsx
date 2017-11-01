// @flow

import React, { Component } from 'react';
import Caption from './typography/Caption';
import './Gallery.css';

type ImageDetails = {
  url: string,
  alt: string,
  caption: Array<string>,
};

type Props = {
  images: Array<ImageDetails>,
};

type State = {
  selected: number,
};

export default class Gallery extends Component {
  props: Props;
  state: State = { selected: 0 };

  renderImage(imageDetails: ImageDetails) {
    const { alt, url, caption } = imageDetails;
    const captionString = caption.reduce((str, caption) => {
      if (str === '') {
        return caption;
      } else {
        return `${str}, ${caption}`;
      }
    }, '');

    return (
      <div className="image-container">
        <div className="image"><img key={url} src={url} alt={alt} /></div>
        <div className="caption">
          <Caption>{captionString}</Caption>
        </div>
      </div>
    );
  }

  renderThumbnails(images: Array<ImageDetails>) {
    const thumbnails = images.map(({alt, url}) => {
      return (
        <div className="thumbnail">
          <img alt={alt} src={url} />
        </div>
      );
    });

    return <div className="thumbnails">{thumbnails}</div>;
  }

  render() {
    const { images } = this.props;
    const { selected } = this.state;


    return (
      <div className="gallery">
        <div>{this.renderThumbnails(images)}</div>
        <div>{this.renderImage(images[selected])}</div>
      </div>
    );
  }
}
