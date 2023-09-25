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
import { Switch } from '@/components/ui/switch';
import { useWindowSize } from '@/hooks/useWindowSize';
import { WINDOW_WIDTH } from '@/shared/enum';

export const metadata: Metadata = {
  title: 'Financial Dashboard',
  description: 'Financial Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const { windowWidth } = useWindowSize();

  return (
    <ServerThemeProvider>
      <html lang="en" className={fontSans.className}>
        <head />
        <body>
          <JotaiProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
              <Theme>
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
              </Theme>
            </ThemeProvider>
          </JotaiProvider>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
