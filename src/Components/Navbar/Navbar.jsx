/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom'


export default function Navbar() {
  // let navBar = document. getElementsByClassName("navbar");
  // navBar.addEventListener("scroll", () =>
  // navBar.classList.replace("p-4", "p-3")
  // );
  // let navBar =document.querySelector("navbar")
  // function changePadding() {
  //   navBar.classList.replace("p-3", "p-4")
  // onScroll={changePadding}
  // }

  let navBar = document.querySelector(".btn");

  function press() {
    console.log(navBar);
  }


  return <>
    <nav className="navbar navbar-expand-lg bg-navbar p-4 fixed-top ">
      <div className="container">
        <Link className="navbar-brand text-white text-uppercase  fw-bolder fs-2 name-site" to="/">START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link active text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="about">about</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="portfolio">portfolio</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="Contacts">contact</Link>
            </li>
            <li>
              <button onClick={press} className='btn btn-danger'>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
