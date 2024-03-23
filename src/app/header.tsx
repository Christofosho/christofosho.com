import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="nav__home" href="/">CS</Link>
      </nav>
    </header>
  );
};
