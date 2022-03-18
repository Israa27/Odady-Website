import React from 'react'
import Lottie from 'react-lottie';
import * as error from './56116-404-error-monster-concept.json';
import './not.css'
export default function() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
  return (
    <div className='error'>
        <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}
