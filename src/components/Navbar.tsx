import React from 'react';
import Link from 'next/link';
import BotIcon from '@/components/icons/BotIcon';

const Navbar: React.FC = () => {
  return (
    <div className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <BotIcon className="h-6 w-6" />
        <span className="sr-only">Robot Twitter Agency</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/twitter">
          𝕏
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/agents">
          Agents
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;