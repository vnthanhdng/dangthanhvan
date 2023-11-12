import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Inter, EB_Garamond, Merriweather, Alegreya_Sans_SC} from 'next/font/google'


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent font-josefin mb-4'>
        <Link href='/' className= 'flex justify-center items-center text-xl font-black'>
        Van Dang
        </Link>
        <Link href='/about' className='flex justify-center items-center text-lg font-black'>
        About
        </Link>
        <Link href='/projects' className='flex justify-center items-center text-lg font-black'>
        Projects
        </Link>
        <Link href='/garden' className='flex justify-center items-center text-lg font-black'>
        Garden
        </Link>
        </nav>
    </header>
  )
}

export default Navbar;