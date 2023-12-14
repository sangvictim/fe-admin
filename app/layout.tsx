"use client";

import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core'
import { SWRConfig } from 'swr';
import Fetcher from '@/shared/utils/fetcher';

export default function RootLayout(props: { children: React.ReactNode }) {
  const theme = createTheme({
    /** Your theme override here */
  });

  return (
    <html lang="en">
      <body>
        <SWRConfig value={{
          fetcher: Fetcher
        }}>
          <MantineProvider theme={theme} defaultColorScheme='auto'>
            {props.children}
          </MantineProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
