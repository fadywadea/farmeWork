import React from 'react'
import img from '../../img/1.svg'
import Style from './Home.module.css'
export default function Home() {
  return <>
    <div className={`${Style.home} d-flex justify-content-center align-items-center text-white`}>
      <div className='text-center'>
        <img src={img} alt="man" className={`${Style.img} mb-3`} />
        <div className="text-center pt-4">
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>START FRAMEWORK</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className={`${Style.line} me-3`}></div>
            <div className='fa-solid fa-star'></div>
            <div className={`${Style.line} ms-3`}></div>
          </div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </>
}
