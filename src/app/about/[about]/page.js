"use client"
import React from 'react'
import { useParams , usePathname } from 'next/navigation'
import Link from 'next/link';

function page() {
    const id = 1
    const {about} = useParams();

    const Pathname = usePathname();
  return (
  <>
    {console.log(  Pathname ,"")}
    <div>page
{about}
<Link  href={`/${id}`} >Button</Link>
    </div>
    </>
  )
}

export default page