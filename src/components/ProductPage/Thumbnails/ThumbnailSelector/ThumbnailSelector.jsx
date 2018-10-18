import React, { Component } from 'react';
import cx from 'classnames';

import './ThumbnailSelector.css';

export default class ThumbnailSelector extends Component {
  constructor (props) {
    super(props);

    const { images, defaultImageId } = this.props;

    this.state = {
      selectedImageId: images.length > 0
      ? ((defaultImageId && images.findIndex(v => v.id === defaultImageId) >= 0 && defaultImageId) || images[0].id)
      : ''
    }

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick (imageId) {
    this.setState({
      selectedImageId: imageId
    });

    const { onSelectedImageChange } = this.props;
    if (onSelectedImageChange) {
      onSelectedImageChange(imageId);
    }
  }

  render () {
    return (
      <div className="col-lg-3 order-lg-1 order-2">
        <div className="single_product_thumbnails">
          <ul>
            { this.props.images.map(image => (
              <li
                key={image.id}
                className={cx({
                  'active': image.id === this.state.selectedImageId
                })}
                onClick={() => this.onItemClick(image.id)}
                >
                <img src={`/assets/images/${image.thumb}`} alt={image.thumb} data-image={`/assets/images/${image.thumb}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
