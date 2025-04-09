import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between text-blue-500 px-5 py-5'>
      <div>
        <h1 className='font-bold text-3xl text-red-400'>BlogsMania</h1>

      </div>

      <div className='flex space-x-9 '>
      <Link href={"/about"}><h1>About</h1></Link>
        <Link href={"/blogs"}><h1>Blogs</h1></Link>
        <Link href={"/contacts"}><h1>Contacts</h1></Link>
        <Link href={"/pricing"}><h1>Pricing</h1></Link>
      </div>

        
    </div>
  )
}

export default Navbar