import React from 'react'
import Lottie from 'react-lottie';
import * as loading from './lf30_editor_iomxr4yy.json';

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
     <Lottie options={defaultOptions} height={200} width={200} />
  </div>
}

