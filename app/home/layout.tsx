import React from 'react'
import SideNav from '@/app/home/components/sideNav'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  )
}
