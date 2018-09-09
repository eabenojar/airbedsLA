import React, { Component } from "react";
import "../../styles/Header/header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img
            src={
              "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/5131db10-9b31-11e6-9502-00163ec9f5fa/3137083918/airbnb-logo.png"
            }
            alt="Image not found"
            className="header__logo--image"
          />
        </div>
        <div className="header__search">
          <form>
            <i
              id="header__search--icon"
              class="fa fa-search"
              aria-hidden="true"
            />
            <input
              className="header__search--input"
              type="text"
              name="name"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="header__links">
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
