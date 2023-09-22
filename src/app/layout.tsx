import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Header from '@/components/layout/Header';
import { fontSans } from '@/configs/fonts';
import { JotaiProvider } from '@/providers/jotai';
import { ThemeProvider } from '@/providers/theme';
import { Theme } from '@radix-ui/themes';
import { ServerThemeProvider } from '@wits/next-themes';

import '@/styles/globals.css';
import '@radix-ui/themes/styles.css';
import Sidebar from '@/components/layout/Sidebar';

export const metadata: Metadata = {
  title: 'Financial Dashboard',
  description: 'Financial Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ServerThemeProvider>
      <html lang="en" className={fontSans.className}>
        <head />
        <body>
          <JotaiProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Theme>
                {/* <Header />
                {children} */}
                <div className="flex justify-start items-start">
                  <Sidebar />
                  <div className="w-full bg-primary-light dark:bg-primary-dark px-10">
                    <Header />
                    <div>{children}</div>
                  </div>
                </div>
              </Theme>
            </ThemeProvider>
          </JotaiProvider>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
