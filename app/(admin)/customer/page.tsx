"use client";

import { IconAdd, IconColumn, IconDelete, IconDotMenu, IconEdit, IconExcel, IconFilter, IconHome, IconSearch, IconShow, IconSortir } from '@/icons'
import { Button, Checkbox, Menu, MultiSelect, Pagination, Popover, ScrollArea, Select, Table, Text, TextInput, Title, Tooltip, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import CustomerModalShow from './_component/CustomerModalShow';
import { ModalRef } from '@/shared/components';
import CustomerModalForm from './_component/CustomerModalForm';
import { customer } from '@/shared/types';
import { customers } from './_component/customers';


const CustomerView = () => {
  const data = customers
  const modalShow = useRef<ModalRef>(null)
  const modalForm = useRef<ModalRef>(null)
  const [datashowed, setDataShowed] = useState<customer>({
    id: '',
    name: '',
    age: 0,
    gender: '',
    address: '',
  })
  const [typeForm, setTypeForm] = useState<'add' | 'edit'>('add')
  const setData = (data: customer) => {
    setDataShowed({
      id: data.id,
      name: data.name,
      age: data.age,
      gender: data.gender,
      address: data.address,
    })
  }
  return (
    <>
      <CustomerModalShow
        modalRef={modalShow}
        datashowed={datashowed}
      />
      <CustomerModalForm
        modalRef={modalForm}
        input={datashowed}
        typeForm={typeForm}
      />
      <div className='flex flex-col gap-4'>
        <div className="flex justify-between">
          <Title order={3}>Customer</Title>
          <Button leftSection={<IconAdd />} component={Link} href={'/customer/create'}>Customer</Button>
        </div>
        <div className='flex flex-col bg-white py-4 gap-4 rounded-lg'>
          <div className="flex gap-4 px-4 justify-between">
            <div className="flex gap-4">
              <TextInput placeholder='Search customer name' leftSection={<IconSearch className='w-5' />} />
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

          <ScrollArea className='h-[calc(100vh-290px)] border rounded'>
            <Table withRowBorders withColumnBorders highlightOnHover>
              <Table.Thead className='sticky top-0 bg-gray-100 z-10'>
                <Table.Tr>
                  <Table.Td w={30}>
                    <Checkbox color='red' />
                  </Table.Td>
                  <Table.Td>Id</Table.Td>
                  <Table.Td>Name</Table.Td>
                  <Table.Td>
                    <div className="flex gap-2">
                      <Text>Age</Text>
                      <IconSortir className='w-4' />
                    </div>
                  </Table.Td>
                  <Table.Td>Gender</Table.Td>
                  <Table.Td>Address</Table.Td>
                  <Table.Td w={30}>#</Table.Td>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {data.map((value, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <Checkbox color='red' />
                    </Table.Td>
                    <Table.Td>{value.id}</Table.Td>
                    <Table.Td>{value.name}</Table.Td>
                    <Table.Td>{value.age}</Table.Td>
                    <Table.Td>{value.gender}</Table.Td>
                    <Table.Td>{value.address}</Table.Td>
                    <Table.Td>
                      <Menu position='left-start'>
                        <Menu.Target>
                          <Button variant='transparent' unstyled >
                            <IconDotMenu className='w-4' />
                          </Button>
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
              <Select defaultValue='10' data={['10', '25', '50', 'all']} styles={{
                input: {
                  border: 'none',
                }
              }} w={70} withCheckIcon={false} />
            </div>
            <Pagination total={10} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerView