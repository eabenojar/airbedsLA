import React, { Component } from "react";
import "../../styles/Header/header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img
            src={
              "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/5131db10-9b31-11e6-9502-00163ec9f5fa/3137083918/airbnb-logo.png"
            }
            alt="Image not found"
            className="header-logo__image"
          />
        </div>
        <div className="header-search">
          <form>
            <i
              id="header-search__icon"
              className="fa fa-search"
              aria-hidden="true"
            />
            <input
              className="header-search__input"
              type="text"
              name="name"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <div>
                <button>Host</button>
              </div>
            </li>
            <li>
              <div>
                <button>Saved</button>
              </div>
            </li>
            <li>
              <div>
                <button>Trips</button>
              </div>
            </li>
            <li>
              <div>
                <button>Messages</button>
              </div>
            </li>
            <li>
              <div>
                <button>Credit</button>
              </div>
            </li>
            <li>
              <div>
                <button>Help</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
