"use client"
import useAuthStore from '@/shared/store/authStore';
import { Button, LoadingOverlay, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const HomePage = () => {
  return (
    <div>
      <span>ini halaman home</span>
    </div>
  )
}

export default HomePage