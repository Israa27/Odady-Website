import React from 'react'
import Lottie from 'react-lottie';
import * as loading from './43298-app-icon-remote-shopping.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
export default function SpinnerLoading() {
  return <div className='spinner'>
     <Lottie options={defaultOptions} height={220} width={220} />
  </div>
}
