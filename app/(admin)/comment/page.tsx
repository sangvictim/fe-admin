"use client";

import React, { useState } from 'react'
import { IconAdd, IconColumn, IconDelete, IconDotMenu, IconEdit, IconExcel, IconFilter, IconSearch, IconShow, IconSortir } from '@/icons'
import { Button, Checkbox, LoadingOverlay, Menu, MultiSelect, Pagination, Popover, ScrollArea, Select, Table, Text, TextInput, Title } from '@mantine/core'
import Link from 'next/link'
import useGet from '@/shared/hooks/useGet';
import { IResponse } from '@/shared/utils/fetcher';


const CustomerView = () => {
  const [page, setPage] = useState<number>(1)
  const [limitPage, setLimitPage] = useState<number | string | null>(10)
  const [search, setSearch] = useState<string>()
  const { data, isLoading } = useGet<IResponse[]>({
    url: 'comments',
    params: {
      '_limit': limitPage !== 'all' ? limitPage : undefined,
      '_page': limitPage !== 'all' ? page : undefined,
      '_sort': 'id',
      '_order': 'desc',
      'q': search
    }

  })

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex justify-between">
        <Title order={3}>Customer</Title>
        <Button leftSection={<IconAdd />} component={Link} href={'/customer/create'}>Customer</Button>
      </div>
      <div className='flex flex-col bg-white py-4 gap-4 rounded-lg'>
        <div className="flex gap-4 px-4 justify-between">
          <div className="flex gap-4">
            <TextInput
              placeholder='Search customer name'
              leftSection={<IconSearch className='w-5' />}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setPage(1)
              }}
            />
            <Button variant='default' px={10} onClick={() => alert('Download Excel')}>
              <div className="flex md:gap-1">
                <IconExcel className='fill-gray-600 w-6' />
                <Text className='hidden md:block'>Excel</Text>
              </div>
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant='outline' px={10} color='red'>
              <div className="flex md:gap-1">
                <IconDelete className='w-5' />
                <Text className='hidden md:block'>Delete Selected</Text>
              </div>
            </Button>
            <Popover width={300} position="bottom" arrowSize={12} withArrow >
              <Popover.Target>
                <Button variant='default' px={10}>
                  <div className="flex md:gap-1">
                    <IconFilter className='fill-gray-600 w-6' />
                    <Text className='hidden md:block'>Filter</Text>
                  </div>
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <div className="flex justify-between mb-4">
                  <Text>Filters</Text>
                  <Text c={'red'}>Reset</Text>
                </div>
                <Select
                  label="Gender"
                  placeholder="Pick gender"
                  data={['Male', 'Female']}
                  comboboxProps={{ withinPortal: false }}
                />
                <MultiSelect
                  label="Age"
                  placeholder="Pick age"
                  data={['20', '21', '35']}
                  comboboxProps={{ withinPortal: false }}
                  clearable
                  hidePickedOptions
                />
              </Popover.Dropdown>
            </Popover>

            <Popover width={200} position="bottom" arrowSize={12} withArrow >
              <Popover.Target>
                <Button variant='default' px={10} >
                  <div className="flex md:gap-1">
                    <IconColumn className='fill-gray-600 w-6' />
                    <Text className='hidden md:block'>Column</Text>
                  </div>
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <div className="flex mb-4">
                  <Text>Columns</Text>
                </div>
                <div className="flex gap-2 flex-col">
                  <Checkbox label="Id" />
                  <Checkbox label="Name" />
                  <Checkbox label="Age" />
                  <Checkbox label="Gender" />
                </div>
              </Popover.Dropdown>
            </Popover>


          </div>
        </div>

        <ScrollArea className='h-[calc(100vh-290px)] border rounded relative'>
          <LoadingOverlay visible={isLoading} />
          <Table withRowBorders withColumnBorders highlightOnHover>
            <Table.Thead >
              <Table.Tr >
                <Table.Td w={30} className='sticky top-0 bg-gray-300 z-10'>
                  <Checkbox color='red' />
                </Table.Td>
                <Table.Td className='sticky top-0 bg-gray-300 z-10' w={70}>Post Id</Table.Td>
                <Table.Td className='sticky top-0 bg-gray-300 z-10'>Name</Table.Td>
                <Table.Td className='sticky top-0 bg-gray-300 z-10'>
                  <div className="flex gap-2 items-center">
                    <Text className='text-sm'>E-mail gan</Text>
                    <IconSortir className='w-3' />
                  </div>
                </Table.Td>
                <Table.Td className='sticky top-0 bg-gray-300 z-10'>comment</Table.Td>
                <Table.Td className='sticky top-0 bg-gray-300 z-10' w={30}>#</Table.Td>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data !== undefined && data.map((value, index) => (
                <Table.Tr key={index}>
                  <Table.Td>
                    <Checkbox color='red' />
                  </Table.Td>
                  <Table.Td>{value.postId}</Table.Td>
                  <Table.Td>
                    <Text lineClamp={1}>{value.name}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text lineClamp={1} component={Link} href={`mailto:${value.email}`} c="blue" className='cursor-pointer'>{value.email}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text lineClamp={1}>{value.body}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Menu position='left-start'>
                      <Menu.Target>
                        <div className='cursor-pointer'>
                          <IconDotMenu className='w-4' />
                        </div>
                      </Menu.Target>
                      <Menu.Dropdown p={0}>
                        <Menu.Item component={Link} href={`/customer/${value.id}`} leftSection={<IconShow className='w-4' />} >Detail</Menu.Item>
                        <Menu.Item component={Link} href={`/customer/${value.id}/edit`} leftSection={<IconEdit className='w-4' />} >Edit</Menu.Item>
                        <Menu.Item leftSection={<IconDelete className='w-4' />} >Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
        <div className="flex justify-between items-center px-4 flex-col md:flex-row gap-4">
          <Text>Showing 1 to 1,000 of 1,000 results</Text>
          <div className="flex items-center border rounded-lg pl-4 gap-4">
            <Text>Per page</Text>
            <Select
              defaultValue='10'
              data={['10', '25', '50', 'all']}
              styles={{
                input: {
                  border: 'none',
                }
              }}
              w={70}
              withCheckIcon={false}
              onChange={setLimitPage}
            />
          </div>
          <Pagination total={50} value={page} onChange={setPage} />
        </div>
      </div>
    </div>
  )
}

export default CustomerView