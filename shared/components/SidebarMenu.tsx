import { NavLinkProps } from '@mantine/core'
import React from 'react'
import { IconHome } from '../../icons'
import Link from 'next/link'

interface NavLinkMenuProps extends NavLinkProps {
  component?: any;
  href?: string,
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
      component: Link,
      href: '/',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Product',
      component: Link,
      href: '/product',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Profile',
      component: Link,
      href: '/profile',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Customer',
      component: Link,
      href: '/customer',
      leftSection: <IconHome className='w-5' />
    },
    {
      label: 'Parent Menu',
      component: Link,
      href: '/profile',
      leftSection: <IconHome className='w-5' />,
      childrenOffset: 32,
      submenu: [
        {
          label: 'Chil Menu',
          component: Link,
          href: '/profile',
          leftSection: <IconHome className='w-5' />
        },
        {
          label: 'Chil Menu 2',
          component: Link,
          href: '/profile',
          leftSection: <IconHome className='w-5' />
        },
        {
          label: 'Chil Menu',
          component: Link,
          href: '/profile',
          leftSection: <IconHome className='w-5' />
        },
        {
          label: 'Chil Menu 2',
          component: Link,
          href: '/profile',
          leftSection: <IconHome className='w-5' />
        }
      ]
    },

  ]
  return { sidebarMenu }
}