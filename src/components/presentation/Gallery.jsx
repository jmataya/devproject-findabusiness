// @flow

import React, { Component } from 'react';
import Caption from './typography/Caption';
import Clarifai from '../container/Clarifai';
import './Gallery.css';

type ImageDetails = {
  url: string,
  alt: string,
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
    const { alt, url } = imageDetails;
    return (
      <div className="image-container">
        <div className="image"><img key={url} src={url} alt={alt} /></div>
        <div className="caption">
          <Caption>
            <Clarifai url={url} />
          </Caption>
        </div>
      </div>
    );
  }

  renderThumbnails(images: Array<ImageDetails>) {
    const { selected } = this.state;
    const thumbnails = images.map((image, idx) => {
      const { alt, url } = image;
      const className = idx === selected ? 'thumbnail selected' : 'thumbnail';

      return (
        <div className={className}
             onClick={() => this.setState({ selected: idx })}
        >
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
        <div>{this.renderThumbnails(images.slice(0, 5))}</div>
        <div>{this.renderImage(images[selected])}</div>
      </div>
    );
  }
}
