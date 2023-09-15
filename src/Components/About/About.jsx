import React from 'react'

export default function About() {
  return (
    <div className='d-flex align-items-center justify-content-center text-center bg-about'>
      <h3>About component</h3>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3'></div>
        <div className='fa-solid fa-star'></div>
        <div className='line ms-3'></div>
      </div>
    </div>
  )
}
