import Image from 'next/image'
import React from 'react'
import Toyota from '../../images/toyota.png'
import Honda from '../../images/honda.png'
import Hyundai from '../../images/hyundai.png'
import Bmw from '../../images/bmw.png'

const Brands = () => {
  return (
    <section className='mx-24 py-12 pb-36'>
      <h5 className="font-semibold pb-8">POPULAR BRANDS</h5>
      <div className="flex justify-between ">
        <Image src={Toyota} alt="toyota" className='w-24 h-24' />
        <Image src={Honda} alt="toyota" className='w-24 h-24'/>
        <Image src={Hyundai} alt="toyota" className='w-24 h-24'/>
        <Image src={Bmw} alt="toyota" className='w-24 h-24'/>
        <Image src={Honda} alt="toyota" className='w-24 h-24'/>
        <Image src={Hyundai} alt="toyota" className='w-24 h-24'/>
      </div>
    </section>
  );
}

export default Brands