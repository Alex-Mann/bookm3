import { LoginButton } from "./LoginButton";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav shadow-md shadow-gray-400">
      <div className="nav-item">
        <Link href="/">
          <a>Bookm3</a>
        </Link>
      </div>
      <LoginButton></LoginButton>
    </div>
  );
}
