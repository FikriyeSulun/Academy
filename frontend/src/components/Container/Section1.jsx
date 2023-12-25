import React from 'react';

export default function Section1() {

  return (
    <section className='masthead'>
      <div className="masthead-bg">
        <img src="../../src/assets/images/section1/bg.webp" alt="image" loading='lazy' />
      </div>

      <div className="container">
        <div className="masthead-content">
          <div className="masthead-left">
            <h1 className='masthead-title'>Hayalin İşin Olsun</h1>
            <p className='masthead-text'>
              Ünlü televizyoncuların, duayen şeflerin, dijital üstadlarının yönetiminde, uygulamalı olarak ve staj imkanlarıyla hayalin gerçek olsun, hayalin işin olsun.</p>
          </div>
          <div className="masthead-right">
            
          </div>
        </div>
      </div>

      {/* waves */}
      <div className='svg-waves'>
        <svg className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="hsla(0,0%,100%,.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="hsla(0,0%,100%,.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="hsla(0,0%,100%,.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </section>
  )
}