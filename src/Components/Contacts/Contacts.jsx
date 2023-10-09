/* eslint-disable eqeqeq */
// import { Formik } from 'formik';
import React from 'react'
import { useState } from 'react'

export default function Contacts() {


  const [labelActive1, setLabelActive1] = useState(false);
  const [labelActive2, setLabelActive2] = useState(false);
  const [labelActive3, setLabelActive3] = useState(false);
  const [labelActive4, setLabelActive4] = useState(false);

  const userNameACtivation = (e) => {
    // console.log(e.target.value);
    if (e.target.value == "") {
      setLabelActive1(false);
    } else {
      setLabelActive1(true)
    }
  };

  const userAgeActivation = (e) => {
    if (e.target.value == "") {
      setLabelActive2(false);
    } else {
      setLabelActive2(true)
    }
  };

  const userEmailACtivation = (e) => {
    if (e.target.value == "") {
      setLabelActive3(false);
    } else {
      setLabelActive3(true)
    }
  };

  const userPasswordACtivation = (e) => {
    if (e.target.value == "") {
      setLabelActive4(false);
    } else {
      setLabelActive4(true)
    }
  };


  return <>
    <div className='mb-4'>
      <div className='contact pt-4'>
        <div className='text-center pt-4' >
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>contact section</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='lines  me-3'></div>
            <div className='fa-solid fa-star star'></div>
            <div className='lines  ms-3'></div>
          </div>
        </div>

        <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>

          <label htmlFor="userName" className={labelActive1 ? 'colorLabel position-relative top-0' : '__top position-relative top-0'}>userName :</label>
          <input onInput={(e) => userNameACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userName' name='userName' id='userName' type="text" />

          <label htmlFor="userAge" className={labelActive2 ? 'colorLabel position-relative top-0' : '__top position-relative top-0'} >userAge :</label>
          <input onInput={(e) => userAgeActivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userAge' name='userAge' id='userAge' type="text" />

          <label htmlFor="userEmail" className={labelActive3 ? 'colorLabel position-relative top-0' : '__top position-relative top-0'} >userEmail :</label>
          <input onInput={(e) => userEmailACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userEmail' name='userEmail' id='userEmail' type="text" />

          <label htmlFor="userPassword" className={labelActive4 ? 'colorLabel position-relative top-0' : '__top position-relative top-0'} >userPassword :</label>
          <input onInput={(e) => userPasswordACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userPassword' name='userPassword' id='userPassword' type="password" />

          <button className="btn mt-4 text-white"> send Message </button>
        </form>

      </div>
    </div>
  </>
}