'use client'
import Link from 'next/link'
import { useUsernameFromCookie } from '@/hooks/useUsernameFromCookie'
import { useEffect } from 'react'

export default function LoggedinLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const userName = useUsernameFromCookie()

  useEffect(() => {
    if (!userName) {
      window.location.href = '/login'
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