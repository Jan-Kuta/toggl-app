'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { getUserName } from '@/helpers/getUserName'

export default function LoggedinLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const userName = getUserName()

  useEffect(() => {
    if (!userName) {
      redirect('/login')
    }
  }, [userName])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Link href={'/projects'}>
          <span className="btn btn-link">Projects</span>
        </Link>
        <Link href={'/reports'}>
          <span className="btn btn-link">Reports</span>
        </Link>
        <Link href={'/time'}>
          <span className="btn btn-link">Time</span>
        </Link>
      </nav>
      <div className="divider" />
      {children}
    </main>
  )
}