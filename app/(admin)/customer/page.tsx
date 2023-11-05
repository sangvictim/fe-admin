"use client";

import { IconArrowDown, IconHome } from '@/icons'
import { Button, Menu, MultiSelect, Table, Text, TextInput, Title } from '@mantine/core'
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
        <div className="flex items-center cursor-pointer gap-6">
          <Title order={3}>Customer List</Title>
        </div>
        <div className='flex justify-between'>
          <div className="flex gap-4">
            <TextInput placeholder='Search' leftSection={<IconArrowDown />} />
            <MultiSelect placeholder='Filter' clearable data={['1', '2', '3', '4', '5']} />
          </div>
          <Button leftSection={<IconArrowDown />} onClick={() => {
            modalForm.current?.openModal()
            setTypeForm('add')
          }}>Create</Button>
        </div>
        <div className='flex w-full h-[calc(100vh-200px)] overflow-x-auto border rounded relative'>
          <Table withRowBorders withColumnBorders striped highlightOnHover>
            <Table.Thead className='sticky top-0 bg-white z-10'>
              <Table.Tr>
                <Table.Td>Id</Table.Td>
                <Table.Td>Name</Table.Td>
                <Table.Td>Age</Table.Td>
                <Table.Td>Gender</Table.Td>
                <Table.Td>Address</Table.Td>
                <Table.Td w={30}>#</Table.Td>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((value, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{value.id}</Table.Td>
                  <Table.Td>{value.name}</Table.Td>
                  <Table.Td>{value.age}</Table.Td>
                  <Table.Td>{value.gender}</Table.Td>
                  <Table.Td>{value.address}</Table.Td>
                  <Table.Td>
                    <Menu position='left-start'>
                      <Menu.Target>
                        <Text className='cursor-pointer'>::</Text>
                      </Menu.Target>
                      <Menu.Dropdown p={0}>
                        <Menu.Item onClick={() => {
                          setData(value)
                          modalShow.current?.openModal()
                        }} leftSection={<IconHome className='w-5' />} >Preview</Menu.Item>
                        <Menu.Item leftSection={<IconHome className='w-5' />} onClick={() => {
                          modalForm.current?.openModal()
                          setTypeForm('edit')
                          setData(value)
                        }}>Edit</Menu.Item>
                        <Menu.Item component={Link} href='/profile' leftSection={<IconHome className='w-5' />} >Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default CustomerView