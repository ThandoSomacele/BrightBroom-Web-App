'use client';

import Image from 'next/image';
import AccountMenu from '../header/AccountMenu';
import React, { useState } from 'react';
import { Session } from 'next-auth';

interface UserAvatarProps {
  session: Session | null;
}

export default function UserAvatar({ session }: UserAvatarProps) {
  const [displayAccMenu, setDisplayAccMenu] = useState('hidden');

  if (!session?.user) return null;

  const toggleAccMenu = () => {
    setDisplayAccMenu((prev) => (prev === 'block' ? 'hidden' : 'block'));
  };

  return (
    <div>
      <Image
        src={
          session.user.image ?? 'https://source.boringavatars.com/marble/120'
        }
        alt="User Avatar"
        width={40}
        height={40}
        className="cursor-pointer rounded-full object-cover md:h-12 md:w-12"
        onClick={toggleAccMenu}
      />
      <AccountMenu
        displayAccMenu={displayAccMenu}
        setDisplayAccMenu={setDisplayAccMenu}
      />
    </div>
  );
}
