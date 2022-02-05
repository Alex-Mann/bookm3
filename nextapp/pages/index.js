import Head from 'next/head'
import { useState } from 'react'
import { useMoralis } from 'react-moralis'
import DayPicker from '../src/components/daypicker'

export default function Home() {
  return (
    <>
      <div className="nav">
        <div className="nav-item">BookM3</div>
        <LoginButton></LoginButton>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <DayPicker />
        </main>
      </div>
    </>
  )
}

export function LoginButton() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis()
  const [isDropdownOpen, toggleDropdown] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="nav-item" onClick={() => authenticate()}>
        Login
      </div>
    )
  }

  return (
    <div
      class="relative inline-block text-left"
      onMouseOver={() => toggleDropdown(true)}
    >
      <div>
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Welcome {user.get('ethAddress')}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        style={{ display: !isDropdownOpen && 'none' }}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
        onMouseOut={() => toggleDropdown(false)}
      >
        <div class="py-1" role="none">
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <button
            type="submit"
            class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-3"
            onClick={logout}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
