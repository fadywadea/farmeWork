/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Style from'./Navbar.module.css'


export default function Navbar() {
  const [scrollbar, setScrollbar] = useState(false);

  const changePadding = () => {
    if (window.scrollY) {
      setScrollbar(true);
    } else {
      setScrollbar(false);
    }
  };
  window.addEventListener('scroll', changePadding);

  return <>
    <nav className={scrollbar ? `${Style.bg_navbar} navbar navbar-expand-lg p-2 fixed-top` : `${Style.bg_navbar} navbar navbar-expand-lg p-4 fixed-top`}>
      <div className="container">
        <Link className={`${Style.name_site} navbar-brand text-white text-uppercase  fw-bolder fs-2 name-site`} to="/">START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3 active" aria-current="page" to="about">about</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="portfolio">portfolio</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="Contacts">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
