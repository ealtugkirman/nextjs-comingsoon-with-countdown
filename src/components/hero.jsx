import React from 'react'
import Image from 'next/image'
import logo from "../../public/gencdemok.png"

const Hero = () => {
  return (
    <div className='flex pb-6 md:pb-12 space-y-5 text-white flex-col justify-center items-center' >
      <h1 className=' font-bold text-4xl' >Genç Demokratlar Vakfı</h1>
      <h3 className='text-2xl' >14 Mayıs 2024 tarihinde tekrar sizlerle</h3>
      <Image src={logo} width={200} height="auto" alt='gençdemoklatlarvakfi' />
    </div>
  )
}

export default Hero