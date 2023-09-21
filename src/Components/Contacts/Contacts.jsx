/* eslint-disable eqeqeq */
import React from 'react'
import { useState } from 'react'
import Style from './Contacts.module.css'

export default function Contacts() {

  let inputUser = document.getElementById('userName');
  let inputAge = document.getElementById('userAge');
  let inputEmail = document.getElementById('userEmail');
  let inputPassword = document.getElementById('userPassword');

  const [labelActive, setLabelActive] = useState(false);

  const labelACtivation = () => {
    if (inputUser == "" || inputAge == "" || inputEmail == "" || inputPassword == "") {
      console.log(inputUser);
    } else {
      setLabelActive(false);
    }
  };


  window.addEventListener("input", labelACtivation);

  return <>
    <div className='mb-4'>
      <div className={`${Style.contact} pt-4`}>
        <div className='text-center pt-4' >
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>contact section</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className={`${Style.lines}  me-3`}></div>
            <div className='fa-solid fa-star star'></div>
            <div className={`${Style.lines}  ms-3`}></div>
          </div>
        </div>

        <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>

          <label htmlFor="userName" className={labelActive ? `${Style.colorLabel} position-relative top-0` : `${Style.__top} position-relative top-0`}>userName :</label>
          <input className='form-control border-0 border-bottom py-3 position-relative' placeholder='userName' name='userName' id='userName' type="text" />

          <label htmlFor="userAge" className={labelActive ? `${Style.colorLabel} position-relative top-0` : `${Style.__top} position-relative top-0`} >userAge :</label>
          <input className='form-control border-0 border-bottom py-3 position-relative' placeholder='userAge' name='userAge' id='userAge' type="text" />

          <label htmlFor="userEmail" className={labelActive ? `${Style.colorLabel} position-relative top-0` : `${Style.__top} position-relative top-0`} >userEmail :</label>
          <input className='form-control border-0 border-bottom py-3 position-relative' placeholder='userEmail' name='userEmail' id='userEmail' type="text" />

          <label htmlFor="userPassword" className={labelActive ? `${Style.colorLabel} position-relative top-0` : `${Style.__top} position-relative top-0`} >userPassword :</label>
          <input className='form-control border-0 border-bottom py-3 position-relative' placeholder='userPassword' name='userPassword' id='userPassword' type="text" />

          <button className="btn mt-4 text-white"> send Message </button>
        </form>

      </div>
    </div>
  </>
}
