/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom'


export default function Navbar() {
  // todo : scroll navbar issue >> let navBar = document. getElementsByClassName("navbar");
  // todo : scroll navbar issue >> navBar.addEventListener("scroll", () =>
  // todo : scroll navbar issue >> navBar.classList.replace("p-4", "p-3")
  // todo : scroll navbar issue >> );

  // ! : scroll navbar issue >> let navBar =document.querySelector("navbar")
  // ! : scroll navbar issue >> function changePadding() {
  // ! : scroll navbar issue >>   navBar.classList.replace("p-3", "p-4")
  // ! : scroll navbar issue >> onScroll={changePadding}
  // ! : scroll navbar issue >> }

  // ? : scroll navbar issue >> let navBar = document.querySelector(".navbar");
  // ? : scroll navbar issue >> function press() {
  // ? : scroll navbar issue >>   navBar.addEventListener("scroll", () =>
  // ? : scroll navbar issue >>     navBar.className.replace("p-3", "p-4"))
  // ? : scroll navbar issue >> }

  // todo: active link issue let navBar = document.querySelector(".navbar").querySelectorAll("a");
  // todo: active link issue console.log(navBar);

  return <>
    <nav className="navbar navbar-expand-lg bg-navbar p-4 fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white text-uppercase  fw-bolder fs-2 name-site" to="/">START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" aria-current="page" to="about">about</Link>
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
