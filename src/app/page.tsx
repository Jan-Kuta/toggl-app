'use client'
import { useEffect } from 'react'
import { Loader } from '@/components/Loader'
import { redirect } from 'next/navigation'
import { getUserName } from '@/helpers/getUserName'

export default function Home() {
  const userName = getUserName()

  useEffect(() => {
    if (userName) {
      redirect('/time')
    } else {
      redirect('/login')
    }
  }, [userName])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Loader />
    </main>
  )
}
