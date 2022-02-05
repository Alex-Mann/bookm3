import { LoginButton } from './LoginButton'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link href="/">
          <a>BookM3</a>
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/me">
          <a>My Sched</a>
        </Link>
      </div>
      <LoginButton></LoginButton>
    </div>
  )
}
