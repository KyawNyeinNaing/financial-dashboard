import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import { fontSans } from '@/configs/fonts';
import { JotaiProvider } from '@/providers/jotai';
import { ThemeProvider } from '@/providers/theme';
import { Theme } from '@radix-ui/themes';
import { ServerThemeProvider } from '@wits/next-themes';

import '@/styles/globals.css';
import '@radix-ui/themes/styles.css';

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
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
              <Theme>
                <PageLayout>{children}</PageLayout>
              </Theme>
            </ThemeProvider>
          </JotaiProvider>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
