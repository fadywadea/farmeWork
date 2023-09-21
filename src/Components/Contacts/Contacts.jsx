import React from 'react'
import { useState } from 'react'
import './Contacts.css'

export default function Contacts() {
  const labelUser = document.getElementById('userName');
  const labelAge = document.getElementById('userAge');
  const labelEmail = document.getElementById('userEmail');
  const labelPassword = document.getElementById('userPassword');

  const [labelActive, setLabelActive] = useState(false);

  const labelACtivation = () => {
    if (labelUser == null || labelAge == null || labelEmail == null || labelPassword == null) {
      setLabelActive(true);
    } else {
      setLabelActive(false);
    }
  }

  window.addEventListener("input", labelACtivation)
  return <>
    <div className='mb-4'>
      <div className='contact  pt-4'>
        <div className='text-center pt-4' >
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>contact section</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='lines me-3'></div>
            <div className='fa-solid fa-star star'></div>
            <div className='lines ms-3'></div>
          </div>
        </div>

        <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>

          <label htmlFor="userName" className={labelActive ? 'position-relative c-label' : 'position-relative top-0 __top'}>userName :</label>
          <input className='form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched' placeholder='userName' name='userName' id='userName' type="text" />

          <label htmlFor="userAge" className={labelActive ? 'position-relative c-label' : 'position-relative top-0 __top'} >userAge :</label>
          <input className='form-control border-0 border-bottom py-4 position-relative ng-valid ng-dirty ng-touched' placeholder='userAge' name='userAge' id='userAge' type="text" />

          <label htmlFor="userEmail" className={labelActive ? 'position-relative c-label' : 'position-relative top-0 __top'} >userEmail :</label>
          <input className='form-control border-0 border-bottom py-4 position-relative ng-valid ng-dirty ng-touched' placeholder='userEmail' name='userEmail' id='userEmail' type="text" />

          <label htmlFor="userPassword" className={labelActive ? 'position-relative c-label' : 'position-relative top-0 __top'} >userPassword :</label>
          <input className='form-control border-0 border-bottom py-4 position-relative ng-valid ng-dirty ng-touched' placeholder='userPassword' name='userPassword' id='userPassword' type="text" />

          <button className="btn mt-4 text-white"> send Message </button>
          {/* style={"background-color #1abc9c"} */}
        </form>

      </div>
    </div>
  </>
}
