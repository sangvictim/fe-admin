import { IconDelete, IconDotMenu, IconEdit, IconShow, IconSortir } from '@/icons';
import { Checkbox, Menu, Table, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

interface DataProps<T> {
  label: string | React.ReactNode;
  sortable?: boolean;
  key: keyof T | (string & {});
  render?: (value: T) => any;
  width?: number
}
interface BaseTableProps<T> {
  data: T[];
  columns: DataProps<T>[];
  baseURL: string
}

export const BaseTable = <T extends Record<string, any>>({ data, columns, baseURL }: BaseTableProps<T>) => {

  return (
    <Table withRowBorders withColumnBorders highlightOnHover stickyHeader>
      <Table.Thead >
        <Table.Tr>
          <Table.Th w={25} key={Math.random()}>
            <Checkbox color='red' size='xs' />
          </Table.Th>
          {columns.map((value, index) => (
            <>
              <Table.Th key={index} w={value.width}>
                <div className="flex gap-2 items-center">
                  <Text size='sm'>{value.label}</Text>
                  {value.sortable && <IconSortir className='w-3' />}
                </div>
              </Table.Th>
            </>
          ))}
          <Table.Th w={30}>#</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, rowIndex) => (
          <Table.Tr key={rowIndex}>
            <Table.Td>
              <Checkbox color='red' value={row.id} size='xs' />
            </Table.Td>

            {columns.map((column, colIndex) => (
              <Table.Td key={colIndex}>
                <Text lineClamp={1} size='sm'>{
                  column.render ? column.render(row) : row[column.key as keyof T]
                }</Text>
              </Table.Td>
            ))}
            <Table.Td>
              <Menu position='left-start'>
                <Menu.Target>
                  <div className='cursor-pointer'>
                    <IconDotMenu className='w-4' />
                  </div>
                </Menu.Target>
                <Menu.Dropdown p={0}>
                  <Menu.Item component={Link} href={`/${baseURL}/${row.id}`} leftSection={<IconShow className='w-4' />} >Detail</Menu.Item>
                  <Menu.Item component={Link} href={`/${baseURL}/${row.id}/edit`} leftSection={<IconEdit className='w-4' />} >Edit</Menu.Item>
                  <Menu.Item leftSection={<IconDelete className='w-4' />} >Delete</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}
