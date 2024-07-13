'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

export default function CtaLinks({ styleClasses }: { styleClasses: string }) {
  const pathname = usePathname();
  const hideCTALinkPaths = ['/book', '/cart', '/checkout'];
  const { status } = useSession();

  return (
    <div className={`cta-buttons flex gap-3 ${styleClasses}`}>
      {status !== 'authenticated' && (
        <Link
          className={clsx('btn btn-primary__outlined text__body-large')}
          href={'/login'}
        >
          Log in
        </Link>
      )}
      <Link
        className={clsx('btn btn-secondary text__body-large', {
          hidden: hideCTALinkPaths.includes(pathname),
        })}
        href={'/book'}
      >
        Book a Cleaner
      </Link>
    </div>
  );
}
