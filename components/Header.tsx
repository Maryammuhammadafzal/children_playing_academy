import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='flex w-full justify-between items-center h-full gap-3'>
        <a href="/" className='cursor-pointer'>
       <img src="/images/logo.png" alt="logo" className='w-auto h-auto' />
        </a>
    </header>
  )
}

export default Header