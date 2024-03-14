'use client'

import { Avatar, Menu, Text } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IconLogout, IconSetting, IconUser } from '../../icons'
import { useAuthStore } from '../store'

export const UserMenu = () => {
  const router = useRouter()
  const { logout } = useAuthStore()

  const hendleLogout = () => {
    try {
      logout()
      router.replace('/login')
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <Menu width={200} position='left-start' trigger='click' closeDelay={100}>
      <Menu.Target>
        <Avatar src='https://placehold.co/100x100.png' size={35} className='cursor-pointer' />
      </Menu.Target>
      <Menu.Dropdown p={0}>
        <Menu.Label className='border-b' h={60}>
          <div className="flex gap-4 h-full items-center">
            <Avatar src='https://placehold.co/100x100.png' size={40} />
            <div className="flex flex-col">
              <Text>Admin</Text>
              <small>Jabatannya</small>
            </div>
          </div>
        </Menu.Label>
        <Menu.Item component={Link} href='/profile' leftSection={<IconUser />} h={40}>Profile</Menu.Item>
        <Menu.Item component={Link} href='/profile' leftSection={<IconSetting />} h={40}>Setting</Menu.Item>
        <Menu.Item onClick={() => hendleLogout()} leftSection={<IconLogout />} h={40}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
