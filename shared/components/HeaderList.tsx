import { IconAdd } from '@/icons'
import { Button, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface HeaderListProps {
  title: string,
  urlCreate: string
}
export const HeaderList = ({ title, urlCreate }: HeaderListProps) => {
  return (
    <div className="flex justify-between">
      <Title order={3}>{title}</Title>
      <Button leftSection={<IconAdd />} component={Link} href={urlCreate}>{title}</Button>
    </div>
  )
}
