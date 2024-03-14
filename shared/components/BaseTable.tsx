"use client";

import { IconDelete, IconDotMenu, IconEdit, IconShow, IconSortir } from '@/icons';
import { Checkbox, Menu, Table, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { useCheckedStore } from '../store';

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
  const { checkedIds, toggleCheck, toggleCheckAll, isAllChecked, isPartialChecked } = useCheckedStore()
  const { colorScheme } = useMantineColorScheme()
  const ids = data.map((value) => value.id)
  return (
    <Table withRowBorders withColumnBorders highlightOnHover>
      <Table.Thead>
        <Table.Tr key={'header'}>
          <Table.Th w={25} key={'checkbox-header'} className={`sticky top-0 z-10 ${colorScheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <Checkbox color='red' size='xs'
              onChange={() => toggleCheckAll(ids)}
              checked={isAllChecked(ids)}
              indeterminate={isPartialChecked(ids)}
            />
          </Table.Th>
          {columns.map((value, index) => (
            <Table.Th key={index} w={value.width} className={`sticky top-0 z-10 ${colorScheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div className="flex gap-2 items-center">
                <Text size='sm'>{value.label}</Text>
                {value.sortable && <IconSortir className='w-3' />}
              </div>
            </Table.Th>
          ))}
          <Table.Th w={30} key={'actions'} className={`sticky top-0 z-10 ${colorScheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>#</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, rowIndex) => (
          <Table.Tr key={rowIndex}>
            <Table.Td key={'checkbox-' + rowIndex}>
              <Checkbox
                color='red'
                size='xs'
                value={row.id}
                checked={checkedIds.some((value) => value === row.id)}
                onChange={(item: any) => {
                  toggleCheck(row.id)
                }}
              />
            </Table.Td>
            {columns.map((column, colIndex) => (
              <Table.Td key={colIndex}>
                <Text lineClamp={1} size='sm'>{
                  column.render ? column.render(row) : row[column.key as keyof T]
                }</Text>
              </Table.Td>
            ))}
            <Table.Td key={'menu-' + rowIndex}>
              <Menu position='left-start'>
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
              </Menu>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table >
  )
}
