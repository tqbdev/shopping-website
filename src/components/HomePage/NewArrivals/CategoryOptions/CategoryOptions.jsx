import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './CategoryOptions.css';

export default class CategoryOptions extends Component {
  constructor (props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick (category) {
    const { onSelectedCategoryChanged } = this.props;
    if (onSelectedCategoryChanged) {
      onSelectedCategoryChanged(category);
    }
  }

  render () {
    const itemStaticClasses = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center';
    var actualCatagories = [];
    if(this.props.categories.length > 0)
    {
    actualCatagories = this.props.categories.slice(0,-1);
    }
    return (
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {actualCatagories && actualCatagories.map(category => (
                <li
                  key={category.id}
                  className={cx(itemStaticClasses, {
                    'active is-checked': category.id === this.props.selectedCategoryId
                  })}
                  onClick={() => this.onItemClick(category)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

CategoryOptions.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategoryId: PropTypes.string.isRequired
};
