import React, { Component } from 'react';
import cx from 'classnames';

import './ThumbnailSelector.css';

export default class ThumbnailSelector extends Component {
  constructor (props) {
    super(props);

    const { images } = this.props;

    this.state = {
      selectedImageUrl: images.length > 0 ? images[0] : ''
    }

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick (imageUrl) {
    this.setState({
      selectedImageUrl: imageUrl
    });

    const { onSelectedImageChange } = this.props;
    if (onSelectedImageChange) {
      onSelectedImageChange(imageUrl);
    }
  }

  render () {
    return (
      <div className="col-lg-3 order-lg-1 order-2">
        <div className="single_product_thumbnails">
          <ul>
            { this.props.images.map(imageUrl => (
              <li
                key={imageUrl}
                className={cx({
                  'active': imageUrl === this.state.selectedImageUrl
                })}
                onClick={() => this.onItemClick(imageUrl)}
                >
                <img src={imageUrl} alt={imageUrl}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
