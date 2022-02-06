import { LoginButton } from './LoginButton'
import Link from 'next/link'

export default function Nav({isAuthenticated}) {
  return (
    <div className="nav shadow-md shadow-gray-400">
      <div className="nav-item">
        <Link href="/">
          <a>BookM3</a>
        </Link>
      </div>
      {isAuthenticated && (

        <div className="nav-item">
        <Link href="/me">
          <a>My Sched</a>
        </Link>
      </div>
        )}
      <LoginButton></LoginButton>
    </div>
  )
}
