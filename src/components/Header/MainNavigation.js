import React, {Component} from 'react';

export default class MainNavigation extends Component {
  render () {
    return (
      <div class="main_nav_container">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-right">
              <div class="logo_container">
                <a href="#">Nordic<span>Shop</span></a>
              </div>
              <nav class="navbar">
                <ul class="navbar_menu">
                  <li><a href="#">home</a></li>
                  <li><a href="categories.html">shop</a></li>
                  <li><a href="#">promotion</a></li>
                  <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                  <li><a href="contact.html">contact</a></li>
                </ul>
                <ul class="navbar_user">
                  <li class="checkout">
                    <a href="#">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span id="checkout_items" class="checkout_items">2</span>
                    </a>
                  </li>
                </ul>
                <div class="hamburger_container">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
