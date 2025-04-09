import React from 'react'
import Link from 'next/link'
import About from '../about/page'

const Navbar = () => {
  return (
    <div>Navbar
        <Link href={"/about"}><h1>About</h1></Link>
    </div>
  )
}

export default Navbar