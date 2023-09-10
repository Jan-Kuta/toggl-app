'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { getUserName } from '@/helpers/getUserName'
import { Header } from '@/components/Header'

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
    <main>
      <Header />
      <div className="min-h-screen p-4 max-w-screen-xl lg:mx-auto">
        {children}
      </div>
    </main>
  )
}