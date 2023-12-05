"use client";

import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import { SWRConfig } from 'swr';
import Fetcher from '@/shared/utils/fetcher';

export default function RootLayout(props: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <SWRConfig value={{
          fetcher: Fetcher
        }}>
          <MantineProvider>
            {props.children}
          </MantineProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
