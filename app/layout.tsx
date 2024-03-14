"use client";

import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core'
import { SWRConfig } from 'swr';
import Fetcher from '@/shared/utils/fetcher';
import { ModalsProvider } from '@mantine/modals';

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
            <ModalsProvider>
              {props.children}
            </ModalsProvider>
          </MantineProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
