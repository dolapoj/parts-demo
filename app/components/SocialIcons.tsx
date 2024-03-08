'use client';
import React from 'react'
import Image from 'next/image'
import FacebookIcon from '../../images/facebook.png'
import GoogleIcon from '../../images/google.png'
import LinkedIn from '../../images/linkedin.png'


const SocialIcons = () => {
  return (
    <div className='flex flex-row mt-4 justify-center gap-8 text-xs items-center'>
      <div className=''>
            <Image 
                  src={FacebookIcon}
                  alt='Facebook'
                  quality={100}
                  className='w-8'
            />
      </div>
      <div>
            <Image 
                  src={GoogleIcon}
                  alt='Google'
                  quality={100}
                  className='w-8'
            />
      </div>
      <div>
            <Image 
                  src={LinkedIn}
                  alt='LinkedIn'
                  quality={100}
                  className='w-8'
            />
      </div>
    </div>
  )
}

export default SocialIcons