import React from 'react'
import Style from './Footer.module.css'

export default function Footer() {
  return <>
    <div>
      <div className={`${Style.footer}`}>
        <div className='card-group m-4'>
          <div className='card border-0'>
            <div className={`${Style.card_body} card-body text-white`}>
              <h3 className=' text-uppercase' >location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className='card border-0'>
            <div className={`${Style.card_body} card-body text-white`}>
              <h3 className='text-uppercase'>around the web</h3>
              <div className="icons">
                <i className={`${Style.icon} fa-brands fa-facebook mx-1`}></i>
                <i className={`${Style.icon} fa-brands fa-twitter mx-1`}></i>
                <i className={`${Style.icon} fa-brands fa-linkedin-in mx-1`}></i>
                <i className={`${Style.icon} fa-solid fa-globe mx-1`}></i>
              </div>
            </div>
          </div>
          <div className='card border-0'>
            <div className={`${Style.card_body} card-body text-white`}>
              <h3 className='text-uppercase'>about freelancer</h3>
              <p>Freelance is a free to use, licensed
                Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Style.end}`}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  </>
}
