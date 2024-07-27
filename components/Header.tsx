import React from "react";
import ConnectWalletButton from "./ConnectWalletButton";
import Link from "next/link";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="sticky flex top-0 h-16 items-center justify-between gap-4 border-b bg-white">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl">Hello World, ink!</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <ConnectWalletButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
