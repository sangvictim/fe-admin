"use client";

import { IconColumn, IconDelete, IconExcel, IconFilter, IconSearch } from '@/icons';
import { BaseTable, HeaderList } from '@/shared/components';
import useGet from '@/shared/hooks/useGet';
import { IResponse } from '@/shared/utils/fetcher';
import { Button, Checkbox, LoadingOverlay, MultiSelect, Pagination, Popover, ScrollArea, Select, Text, TextInput, useMantineColorScheme } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useState } from 'react';


const CustomerView = () => {
  const [page, setPage] = useState<number>(1)
  const [limitPage, setLimitPage] = useState<number | string | null>(10)
  const { colorScheme } = useMantineColorScheme()
  const [debounceSearch, setDebounceSearch] = useDebouncedState<string>('', 300)
  const { data, isLoading } = useGet<IResponse[]>({
    url: 'comments',
    params: {
      '_limit': limitPage !== 'all' ? limitPage : undefined,
      '_page': limitPage !== 'all' ? page : undefined,
      '_sort': 'id',
      '_order': 'desc',
      'q': debounceSearch
    }

  })

  return (
    <div className='flex flex-col gap-4'>
      <HeaderList title='Comment' urlCreate='comment/create' />
      <div className='flex flex-col  py-4 gap-4 rounded-lg'>
        <div className="flex gap-4 px-4 justify-between">
          <div className="flex gap-4">
            <TextInput
              placeholder='Search comment'
              leftSection={<IconSearch className='w-5' />}
              defaultValue={debounceSearch}
              onChange={(event) => {
                setDebounceSearch(event.target.value)
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

        <ScrollArea className={`h-[calc(100vh-290px)] rounded relative ${colorScheme === 'dark' ? 'border border-gray-500' : 'border'}`}>
          <LoadingOverlay visible={isLoading} />
          <BaseTable
            baseURL='comment'
            data={data || []}
            columns={[
              {
                key: 'postId',
                label: 'Post Id',
                sortable: true,
                width: 100
              },
              {
                key: 'name',
                label: 'Name',
              },
              {
                key: 'email',
                label: 'E-mail',
              },
              {
                key: 'body',
                label: 'Comment',
              },
            ]} />
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