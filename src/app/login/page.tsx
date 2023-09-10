'use client'
// source from https://flowbite.com/blocks/marketing/login/

import { login } from '@/api/login'
import { useState } from 'react'

export default function Login() {
  const [userName, setUserName] = useState<string>('')

  const userNameFromLocalStorage = localStorage.getItem('userName')
  if (userNameFromLocalStorage) {
    window.location.href = '/time'
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (userName === '') {
      return
    }

    const result = await login(userName)
    if (result.ok) {
      //set userName in localStorage
      localStorage.setItem('userName', userName)
      window.location.href = '/time'
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Toggl clone App
        </div>
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  name</label>
                <input type="text" name="name" id="name"
                       value={userName} onChange={(e) => {
                         setUserName(e.target.value)
                       }}
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Your name" required />
              </div>
              <button type="submit"
                      className="w-full  font-medium rounded-lg text-sm px-5 py-2.5 text-center btn btn-primary">Sign
                in
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
