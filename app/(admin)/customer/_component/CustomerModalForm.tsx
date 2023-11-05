import Modal, { ModalRef } from '@/shared/components/Modal'
import { customer } from '@/shared/types'
import { Button, NumberInput, Select, Text, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import React, { useEffect } from 'react'
import { z } from 'zod'

interface CustomerModalInputProps {
  input: customer,
  typeForm: 'add' | 'edit'
  modalRef: React.RefObject<ModalRef>
}
const CustomerModalForm: React.FC<CustomerModalInputProps> = ({ modalRef, input, typeForm }) => {
  const userValidation = z.object({
    id: z.string().optional(),
    name: z.string().min(1, 'Name cannot be empty'),
    address: z.string().min(1, 'Address cannot be empty'),
    gender: z.string().min(1, 'Gender cannot be empty'),
    age: z.number({ coerce: true }).min(1, 'Age cannot be empty'),
  })

  const form = useForm<customer>({
    initialValues: {
      id: '',
      name: '',
      age: 0,
      gender: '',
      address: '',
    },
    validate: zodResolver(userValidation)
  })

  const doSubmit = (values: customer) => {
    if (typeForm === 'add') {
      console.log('add')
    } else if (typeForm === 'edit') {
      console.log('edit')
    }
  }

  useEffect(() => {
    form.setValues(input)
  }, [input])
  return (
    <Modal ref={modalRef} onClose={() => {
      form.reset()
      modalRef.current?.closeModal()
    }}
      size={'lg'}
      title={typeForm === 'add' ? 'Create customer' : 'Edit customer'}
      classNames={{ title: '!font-bold !text-2xl' }}>
      <form onSubmit={form.onSubmit((values) => doSubmit(values))}>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <Text fw={700}>Name</Text>
            <TextInput placeholder='Name'
              {...form.getInputProps('name')}
            />
          </div>
          <div className="flex flex-col">
            <Text fw={700}>Age</Text>
            <NumberInput placeholder='Age' min={0}
              {...form.getInputProps('age')}
            />
          </div>
          <div className="flex flex-col">
            <Text>Gender</Text>
            <Select placeholder='Gender' data={['female', 'male']} {...form.getInputProps('gender')} />
          </div>
          <div className="flex flex-col">
            <Text>Address</Text>
            <TextInput placeholder='Address' {...form.getInputProps('address')} />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <Button type='submit'>Save</Button>
          <Button type='button' onClick={() => {
            form.reset()
            modalRef.current?.closeModal()
          }}>Cancel</Button>
        </div>
      </form>
    </Modal>
  )
}

export default CustomerModalForm