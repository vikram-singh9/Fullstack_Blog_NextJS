import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-around px-9 py-5 text-blue-500 '>
      <div>
        <h1>BlogsMania</h1>
      </div>

        <Link href={"/about"}><h1>About</h1></Link>
        <Link href={"/blogs"}><h1>Blogs</h1></Link>
        <Link href={"/contacts"}><h1>Contacts</h1></Link>
        <Link href={"/pricing"}><h1>Pricing</h1></Link>
    </div>
  )
}

export default Navbar