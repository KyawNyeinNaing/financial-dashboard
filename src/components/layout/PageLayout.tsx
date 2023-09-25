'use client';
import React, { ReactNode } from 'react';
import { useAtom } from 'jotai';

import { windowWidthAtom } from '@/shared/atom';
import { WINDOW_WIDTH } from '@/shared/enum';

import Header from './Header';
import Sidebar from './Sidebar';

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [windowWidth] = useAtom(windowWidthAtom);

  return (
    <div className="flex justify-start items-start">
      {windowWidth > WINDOW_WIDTH.LG && (
        <div className="fixed top-0 left-0">
          <Sidebar />
        </div>
      )}
      <div className="w-full lg:ml-[260px] bg-primary-light dark:bg-primary-dark px-4">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
