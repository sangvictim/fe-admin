import { NavLinkProps } from '@mantine/core'
import React from 'react'
import { IconHome } from '../../icons'
import Link from 'next/link'

interface NavLinkMenuProps extends NavLinkProps {
  component?: any;
  href?: string,
  module: string,
  submenu?: NavLinkSubMenuProps[]
}

interface NavLinkSubMenuProps extends NavLinkProps {
  component?: any;
  href?: string
}

export const SidebarMenu = () => {

  const sidebarMenu: NavLinkMenuProps[] = [
    {
      label: 'Home',
      module: 'home',
      component: Link,
      href: '/',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Product',
      module: 'product',
      component: Link,
      href: '/product',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Profile',
      module: 'profile',
      component: Link,
      href: '/profile',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Customer',
      module: 'customer',
      component: Link,
      href: '/customer',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Administrator',
      module: 'administrator',
      component: Link,
      href: '/administrator',
      leftSection: <IconHome className='w-5' />,
      childrenOffset: 32,
      submenu: [
        {
          label: 'Chil Menu',
          component: Link,
          href: '/administrator/setting',
          leftSection: <IconHome className='w-5' />
        },
        {
          label: 'Chil Menu 2',
          component: Link,
          href: '/administrator/setting',
          leftSection: <IconHome className='w-5' />
        },
        {
          label: 'Chil Menu',
          component: Link,
          href: '/administrator/setting',
          leftSection: <IconHome className='w-5' />
        },
        {
          label: 'Chil Menu 2',
          component: Link,
          href: '/administrator/setting',
          leftSection: <IconHome className='w-5' />
        }
      ]
    },

  ]
  return { sidebarMenu }
}