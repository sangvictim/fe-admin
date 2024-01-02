"use client";

import { IconMoon, IconSun } from '@/icons';
import { NotificationMenu, SidebarMenu, UserMenu } from '@/shared/components';
import { AppShell, Burger, Button, NavLink, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';


export default function RootLayout(props: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const { sidebarMenu } = SidebarMenu()
  const path = usePathname()
  const { setColorScheme, colorScheme } = useMantineColorScheme()

  const ButtonDarkMode = () => {
    if (colorScheme === 'light') {
      return <div className='flex item-center justify-center' onClick={() => setColorScheme('dark')}><IconMoon /></div>
    } else {
      return <div className='flex item-center justify-center' onClick={() => setColorScheme('light')}><IconSun /></div>
    }
  }
  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{ width: 208, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >

      <AppShell.Header>
        <div className='flex w-full items-center h-full justify-between px-6'>
          <div className="flex">
            <span>Logo</span>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </div>
          <div className="flex gap-4">
            {ButtonDarkMode()}
            <NotificationMenu />
            <UserMenu />
          </div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p='xs'>
        {sidebarMenu.map((item, index) => (
          <NavLink key={index} {...item} active={path.includes(item.module)}>
            {item.submenu && item.submenu.map((item, index) => (
              <NavLink label={item.label} key={index} />
            ))}
          </NavLink>
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>


    </AppShell>
  )
}
