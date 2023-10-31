import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'


export default function RootLayout(props: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <MantineProvider>
          {props.children}
        </MantineProvider>
      </body>
    </html>
  )
}
