import React from 'react'

export default function About() {
  return (
    <div className='d-flex justify-content-center align-items-center text-white bg-about'>
      <div>
        <div className='text-center pt-4'>
          <h3 className='text-uppercase mb-3 fs-1 fw-bolder'>About component</h3>
        </div>
        <div className='d-flex align-items-center justify-content-center text-center mb-3'>
          <div className='line me-3'></div>
          <div className='fa-solid fa-star'></div>
          <div className='line ms-3'></div>
        </div>
        <div className='container'>
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route.
                The download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.</p>
            </div>
            <div className="col-md-6 pe-5">
              <p>Freelancer is a free bootstrap theme created by Route.
                The download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
