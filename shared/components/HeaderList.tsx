import { IconAdd } from '@/icons'
import { Can } from '@casl/react'
import { Button, Title } from '@mantine/core'
import Link from 'next/link'
import appApability from '../hooks/appApability'

interface HeaderListProps {
  title: string,
  urlCreate: string
}
export const HeaderList = ({ title, urlCreate }: HeaderListProps) => {

  const ability = appApability()

  console.log('permission:', ability.can('read', 'comment'));

  return (
    <div className="flex justify-between">
      <Title order={3}>{title}</Title>
      <Can I='read' a='comment' ability={ability}>
        <Button leftSection={<IconAdd />} component={Link} href={urlCreate}>{title}</Button>
      </Can>
    </div>
  )
}
