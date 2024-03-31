'use client'

import React from 'react'

export interface InputPropsType {
    placeHolder?:string,
    title?:string,
    type?:'text'|'password'|'number'
}

export  function InputStd({
    placeHolder='',
    title='',
    type='text'
}:InputPropsType) {
  return (
    <div className=' flex flex-col justify-start gap-1'>
        <div className=' text-xs font-semibold'>{title}</div>
        <input className=' border transition-all duration-300 border-gray-600/50 active:border-primaryy-600 focus:border-primaryy-500 active:ring-primaryy-600 focus:ring-primaryy-500 active:ring-1 !outline-none focus:outline-none focus:ring-1  px-3 py-2 text-xs' type={type} />
    </div>
  )
}
