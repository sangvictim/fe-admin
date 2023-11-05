import Modal, { ModalRef } from '@/shared/components/Modal'
import { customer } from '@/shared/types'
import { Text } from '@mantine/core'
import React from 'react'

interface CustomerModalShowProps {
  datashowed: customer,
  modalRef: React.RefObject<ModalRef>
}
const CustomerModalShow: React.FC<CustomerModalShowProps> = ({ modalRef, datashowed }) => {
  return (
    <Modal
      withCloseButton
      ref={modalRef}
      onClose={() => modalRef.current?.closeModal()}
      size={'lg'}
      title='Show customer'
      classNames={{ title: '!font-bold !text-2xl' }}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <Text fw={700}>Id</Text>
          <Text>{datashowed.id}</Text>
        </div>
        <div className="flex flex-col">
          <Text fw={700}>Name</Text>
          <Text>{datashowed.name}</Text>
        </div>
        <div className="flex flex-col">
          <Text fw={700}>Age</Text>
          <Text>{datashowed.age}</Text>
        </div>
        <div className="flex flex-col">
          <Text fw={700}>Geneder</Text>
          <Text>{datashowed.gender}</Text>
        </div>
        <div className="flex flex-col">
          <Text fw={700}>Address</Text>
          <Text>{datashowed.address}</Text>
        </div>
      </div>
    </Modal>
  )
}

export default CustomerModalShow