'use client';
import React from 'react'
import Button from './Button';
import SocialIcons from './SocialIcons'

import Link from 'next/link';

const LoginCard = () => {
  return (
    <main className='p-6'>
      <p style={{fontWeight: '700'}} className='text-2xl font-semibold'>Sign In</p>
      <form>
            <div className='flex flex-col'>
                  <label className='mt-8 text-left sm:ml-4'>Email</label>
                  <input
                        type='text'
                        name='email'
                        placeholder='example@kineticparts.com' 
                        autoComplete='off'
                        className='rounded-md'
                  />
            </div>
            <div className='flex flex-col'>
                  <label className='mt-4 text-left sm:ml-4'>Password</label>
                  <input
                        type='password'
                        name='password'
                        placeholder=''
                        autoComplete='off'
                        className='rounded-md'
                  />
            </div>
            <Link href='/reset-password'><p style={{textAlign: 'right'}} className='text-sm italic cursor-pointer'>Forgot password?</p></Link>
            <div className="strike mt-4">
                  <span>or with</span>
            </div>
            <div className='mb-8'>
                  <SocialIcons />
            </div>
            <Button title="Sign In" />
      </form>
    </main>
  )
}

export default LoginCard