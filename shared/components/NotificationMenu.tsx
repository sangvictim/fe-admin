"use client";

import { Avatar, Menu, ScrollArea, Text } from '@mantine/core'
import React from 'react'
import { IconNotification } from '../icons'
import Link from 'next/link'

export const NotificationMenu = () => {
  const dataNotif = Array.from({ length: 20 }, (_, index) => index)
  return (
    <Menu width={300} position='left-start'>
      <Menu.Target>
        <div className="relative items-center w-6 flex cursor-pointer">
          <div className="absolute bg-red-500 rounded-full w-3 h-3 top-0 right-0 flex items-center justify-center">
          </div>
          <IconNotification className='w-6' />
        </div>
      </Menu.Target>
      <Menu.Dropdown p={0}>
        <Menu.Label className='border-b'>
          <Text>Notification</Text>
        </Menu.Label>
        <ScrollArea.Autosize mah={500}>
          {dataNotif.map((item, index) => (
            <Menu.Item key={index} component={Link} href='/profile' leftSection={<Avatar src='https://placehold.co/100x100.png' size={35} />}>
              <div className="flex flex-col">
                <span>Title Notification</span>
                <small>Description Notification</small>
              </div>
            </Menu.Item>
          ))}
        </ScrollArea.Autosize>
      </Menu.Dropdown>
    </Menu>
  )
}