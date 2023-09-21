import React from 'react'
import img from '../../img/2.png'
import img2 from '../../img/3.png'
import img3 from '../../img/4.png'
import Style from './Portfolio.module.css'

export default function Portfolio() {
  return <>
    <div className={`${Style.portfolio} p-3`}>
      <div className='mb-4'>
        <div>
          <div className='text-center pt-4' >
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className={`${Style.lines} me-3`}></div>
              <div className={` ${Style.star} fa-solid fa-star`}></div>
              <div className={`${Style.lines} ms-3`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100 rounded-3' src={img} alt="" />
              <div className={`${Style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100 rounded-3' src={img2} alt="" />
              <div className={`${Style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100 rounded-3' src={img3} alt="" />
              <div className={`${Style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100 rounded-3' src={img} alt="" />
              <div className={`${Style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100 rounded-3' src={img2} alt="" />
              <div className={`${Style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className='rounded-3 overflow-hidden position-relative'>
              <img className='w-100 rounded-3' src={img3} alt="" />
              <div className={`${Style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
