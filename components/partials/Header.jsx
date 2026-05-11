'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImageWrapper from '../Wrappers/ImageWrapper';
import logo from '@/public/images/logo.png';
import NavItem from '../typography/NavItem';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import { MainButton } from '../button/MainButton';
import { logout } from '@/services/utils/auth';
import LanguageSwitcher from '../language-switcher';
import LoginIcon from '../section/LoginIcon';

export default function Header() {
  const pathname = usePathname();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [pathname]);

  const navigations = [
    { path: '/', title: 'Why MaskHR?' },
    { path: '/company', title: 'For Company' },
    { path: '/candidates', title: 'For Candidates' },
  ];

  const handleLogout = () => {
    logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-transparent">
      <div className="sticky flex items-center justify-between gap-4 px-[4vw] py-[4vh]">
        {/* LOGO */}
        <Link href="/">
          <ImageWrapper src={logo} width={140} height={80} alt="Mask Hr" />
        </Link>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-4 md:flex md:gap-8">
          {navigations.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link key={index} href={item.path}>
                <NavItem
                  text={item.title}
                  textColor={
                    isActive
                      ? 'text-mainBlack'
                      : 'text-mainBlack/50 hover:text-mainBlack hover:font-semibold'
                  }
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 lg:gap-8">
          <LanguageSwitcher />

          {/* AUTH AREA */}
          {!user ? (
            <div className="flex items-center gap-3">
              <LoginIcon />

              <Link href="/sign-up" className="hidden md:block">
                <MainButton text="Start Hiring" hasIcon />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {user.role === 'admin' && (
                <Link
                  href="/dashboard/admin"
                  className="text-sm font-medium text-mainBlack hover:underline"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          )}

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
