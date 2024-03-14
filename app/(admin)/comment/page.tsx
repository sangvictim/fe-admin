"use client";

import { IconColumn, IconDelete, IconExcel, IconFilter, IconSearch } from '@/icons';
import { BaseTable, ButtonDefault, HeaderList } from '@/shared/components';
import useGet from '@/shared/hooks/useGet';
import { useCheckedStore } from '@/shared/store';
import { IResponse } from '@/shared/utils/fetcher';
import { Checkbox, LoadingOverlay, MultiSelect, Pagination, Popover, ScrollArea, Select, Text, TextInput, useMantineColorScheme } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { useEffect, useState } from 'react';


const CustomerView = () => {
  const [page, setPage] = useState<number>(1)
  const [limitPage, setLimitPage] = useState<number | string | null>(10)
  const { colorScheme } = useMantineColorScheme()
  const [debounceSearch, setDebounceSearch] = useDebouncedState<string>('', 500)
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

  const { checkedIds, clearChecked } = useCheckedStore()

  const handleDelete = () => modals.openConfirmModal({
    withCloseButton: false,
    labels: { confirm: 'Delete', cancel: 'Cancel' },
    centered: true,
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    )
  })

  useEffect(() => {
    // if (data) {
    //   updateCheckList(data.map((value) => value.id))
    // }
  }, [data])

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
            <ButtonDefault
              icon={<IconExcel className='fill-gray-600 w-5' />}
              label='Excel'
              variant='default'
              onClick={() => alert('Download Excel')}
            />
          </div>
          <div className="flex gap-4">

            <Popover width={300} position="bottom" arrowSize={12} withArrow >
              <Popover.Target>
                <ButtonDefault
                  label='Filter'
                  icon={<IconFilter className='fill-gray-600 w-6' />}
                  variant='default'
                />
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
                <ButtonDefault
                  label='Column'
                  icon={<IconColumn className='fill-gray-600 w-6' />}
                  variant='default'
                />
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
        <div className="flex justify-between items-center px-4 flex-col md:flex-row gap-4 relative">
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
          <Pagination total={50} value={page} onChange={(value) => {
            clearChecked()
            setPage(value)
          }} />
          <div className={`absolute -bottom-4 px-4 rounded bg-blue-500 w-1/2 left-1/4 z-10 h-12 flex transition duration-300 transform ${checkedIds.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className="flex w-full justify-between items-center">
              <span>{checkedIds.length} Items Selected</span>
              <div className="flex">
                <ButtonDefault
                  label='Delete'
                  icon={<IconDelete className='w-5' />}
                  variant='transparent'
                  color='white'
                  size='xs'
                  onClick={handleDelete}
                />
                <div className='border-l '>
                  <ButtonDefault
                    label='Cancel'
                    variant='transparent'
                    color='white'
                    size='xs'
                    onClick={() => clearChecked()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerView