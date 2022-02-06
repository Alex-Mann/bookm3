import { useState } from "react";
import { useMoralis } from "react-moralis";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CopyURL() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard
      text={user.get("ethAddress")}
      onCopy={() => setCopied(true)}
    >
      <button className="button__box">{copied ? "Copied!" : "Copy my invite URL"}</button>
    </CopyToClipboard>
  );
}
