'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Drawer, ActionIcon } from 'rizzui';
import Link from 'next/link';
// Image imports
import logo from '@/public/images/logo.png';
import NormalText from '@/components/typography/NormalText';
import { CiMenuFries } from 'react-icons/ci';
import { MdCancel } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { MainButton } from '../button/MainButton';

export default function MobileNav() {
  const [drawerState, setDrawerState] = useState(false);
  // const t = useTranslations("Menu");
  const pathname = usePathname();
  const menuz = [
    {
      name: 'For Company',
      link: '/company',
    },
    {
      name: 'For Candidates',
      link: '/candidates',
    },
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
  ];

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          if (drawerState === false) {
            setDrawerState(true);
          }
        }}
        className="font-lato relative inline-flex cursor-pointer md:hidden"
      >
        <CiMenuFries className="flex text-[32px] text-mainBlack md:hidden" />
      </div>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        placement="left"
        size="sm"
      >
        <div className="z-50 flex min-h-full flex-col bg-white p-[20px]">
          <header className="border-lightGrayBorder darks:border-[#2f3030] border-b-[.5px] px-0 md:px-[40px]">
            <div className="my-2 flex items-center justify-between gap-2 font-Gilroy">
              <Link href={'/'}>
                <Image src={logo} width={110} height={60} alt={'Mashr logo'} />
              </Link>

              <ActionIcon
                size="sm"
                variant="outline"
                rounded="DEFAULT"
                className="rounded-[5px] border-0"
                onClick={() => setDrawerState(false)}
              >
                <MdCancel className="text-[26px] text-mainBlack" />
              </ActionIcon>
            </div>
          </header>
          <div className="darks:border-[#2f3030] px-0 pb-4 md:px-[40px]">
            <div className="py-4">
              {menuz.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <div key={index} onClick={() => setDrawerState(false)}>
                    <Link
                      href={item.link}
                      className="flex cursor-pointer flex-col gap-8 divide-x-4"
                    >
                      <div
                        key={index}
                        className="group flex cursor-pointer items-center justify-start gap-2 rounded-[5px] p-2 hover:border-l-[4px] hover:bg-[#E9EEF9] hover:text-primary"
                      >
                        <NormalText
                          text={item.name}
                          color={`${isActive ? 'font-semibold' : 'font-normal'}`}
                          size={'text-[16px]'}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>{' '}
          <div className="">
            <Link href={'/sign-up'} className="">
              <MainButton text={'Start Hiring'} hasIcon={true} />
            </Link>
          </div>
        </div>{' '}
      </Drawer>{' '}
    </>
  );
}
