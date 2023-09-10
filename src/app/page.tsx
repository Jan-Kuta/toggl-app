'use client'
import { useUsernameFromCookie } from '@/hooks/useUsernameFromCookie'
import { useEffect } from 'react'
import { Loader } from '@/components/Loader'

export default function Home() {
  const userName = useUsernameFromCookie()

  useEffect(() => {
    if (userName) {
      window.location.href = '/time'
    } else {
      window.location.href = '/login'
    }
  }, [userName])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Loader />
    </main>
  )
}
