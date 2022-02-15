import React from "react";
import "./style.scss";

const Card = () => (
  <div className="container">
    <div className="card">
      <div className="card__image-container">
        <div className="image__container">
          <img
            className="card__image"
            src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>

      <div className="card__content">
        <div className="col-30">
          <img
            className="card__image__profile"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg"
            alt=""
          />
        </div>
        <div className="col-70">
          <h6 className="card__title">Someone Else</h6>
          <h6 className="card__title">No delivery</h6>
        </div>
      </div>
      <ul className="mcd-menu">
        <li>
          <a href="/">
            <i className="fa fa-home" />
            <strong>Profile</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-edit" />
            <strong>Products</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-gift" />
            <strong>Your Trips</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-globe" />
            <strong>My Wallet</strong>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-comments-o" />
            <strong>Support</strong>
          </a>
        </li>

        <li>
          <a href="/">
            <i className="fa fa-envelope-o" />
            <strong>Contacts</strong>
          </a>
        </li>
      </ul>
    </div>
    <ul className="mcd-menu bottom ">
      <li>
        <a href="/" className="active">
          <i className="fa fa-envelope-o" />
          <strong className="center">Logout</strong>
        </a>
      </li>
    </ul>
  </div>
);

export default Card;
