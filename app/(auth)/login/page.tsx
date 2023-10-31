"use client";

import { Button, Checkbox, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import React from 'react'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { AuthBaseProps, LoginType, UserAuth } from '@/shared/types'
import useAuthStore from '@/shared/store/authStore'
import { useStore } from 'zustand'
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter()
  const { setAuth } = useStore(useAuthStore, (state: AuthBaseProps) => state)
  const schemaValidation = z.object({
    email: z.string().email({ message: 'Invalid email' }).endsWith(".com", { message: "Only .com domains allowed" }),
    password: z.string().min(4, { message: 'Password must be at least 4 characters' }),
    rememberme: z.boolean().optional(),
  }).partial()

  const form = useForm({
    validate: zodResolver(schemaValidation),
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    }
  })

  const handleSubmit = (value: LoginType) => {
    setAuth({
      user: {
        email: value.email,
        name: "namanya"
      },
      token: '123',
      isLogedIn: true
    })
    router.replace('home')
    // alert(values.email)
  }


  return (
    <div className='min-w-screen min-h-screen flex'>
      <div className='flex md:w-1/2 w-full items-center justify-center min-h-full'>
        <div className='p-6 flex flex-col w-[400px] gap-4'>
          <Title order={2}>Welcome Back</Title>
          <Text>Sign in to your account</Text>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <TextInput placeholder='Email' label='Email' withAsterisk {...form.getInputProps('email')} mb='md' />
            <PasswordInput placeholder='Password' label='Password' withAsterisk {...form.getInputProps('password')} mb='xs' />
            <div className='flex justify-between mb-4'>
              <Checkbox label='Remember me' size='xs' {...form.getInputProps('rememberMe', { type: 'checkbox' })} />
              <small>Forgot password</small>
            </div>
            <Button type='submit' w='100%'>Login</Button>
          </form>
          <small className='text-center text-gray-400'>Or</small>
          <Button type='button'>Login with Google</Button>
        </div>
      </div>

      <div className='w-1/2 items-center justify-center min-h-full bg-blue-500 hidden md:flex'>
        <div className='bg-green-500 p-6 flex flex-col w-full gap-4'>
          <Title order={2}>Gambar</Title>
        </div>
      </div>
    </div>
  )
}

export default LoginPage