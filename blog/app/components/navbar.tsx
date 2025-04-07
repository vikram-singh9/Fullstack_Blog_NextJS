import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>Navbar
        <Link href={"/contacts"}><h1>contacts</h1></Link>
    </div>
  )
}

export default Navbar