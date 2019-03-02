import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Meetupz
            </a>
            <a
              href="#"
              data-target="main-menu"
              className="sidenav-trigger show-on-large"
            >
              📋
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">👫 Meetups</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="main-menu">
          <li>
            <Link to="/">👫 Meetups</Link>
          </li>
          <li>
            <Link to="/meetups/add">➕ New Meetup</Link>
          </li>
          <li>
            <Link to="/about">❓ About</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
