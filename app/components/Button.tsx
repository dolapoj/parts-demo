'use client';
import React from 'react'
// import styles from '../../'

const Button = (props: any) => {
  return (
    <div className='flex mt-8'>
      <button className={`button m-auto text-white w-full p-2`}>
            {props.title}
      </button>
    </div>
  )
}

export default Button