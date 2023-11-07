'use client'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import NavLinks from '@/app/home/components/navlink'
import './styles.css'

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <div className="sidenav-ctn">
      <div className="sidenav-logo">
        <div className="flex flex-row items-center">
          <Bars3Icon onClick={handleToggle} className="sidenav-icon" />
          <Link href="/" className="ml-2">
            <div className="w-32 text-white md:w-40">logo</div>
          </Link>
        </div>
        <span className="hidden">Notify</span>
      </div>
      <NavLinks isOpen={isOpen} onToggle={handleToggle} />
    </div>
  )
}
