import React, { Component } from 'react';
import _ from 'lodash';

import ThumbnailSelector from './ThumbnailSelector/ThumbnailSelector';

import './Thumbnails.css';

export default class Thumbnails extends Component {
  constructor (props) {
    super(props);

    const { images } = this.props;

    this.state = {
      selectedImage: images.length > 0 ? images[0] : ''
    }

    this.onSelectedImageChange = this.onSelectedImageChange.bind(this);
  }

  onSelectedImageChange(imageId) {
    if (!imageId) return;

    const selectedImage = _.find(this.props.images, image => image.id === imageId);

    this.setState({
      selectedImage
    });
  }

  render () {
    return (
      <div className="col-lg-7">
        <div className="row">
          <ThumbnailSelector
            images={this.props.images}
            onSelectedImageChange={this.onSelectedImageChange}></ThumbnailSelector>
          <div className="col-lg-9 image_col order-lg-2 order-1">
            <div className="single_product_image">
              <div className="single_product_image_background" style={{backgroundImage: `url(/assets/images/${this.state.selectedImage.pic})`}}></div>
            </div>
          </div>
        </div>
			</div>
    );
  }
}