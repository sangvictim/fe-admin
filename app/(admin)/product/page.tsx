import { Card, Text, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const ProductView = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
      <div className="col-span-1 md:col-span-2 border-r pr-3">
        <div className="sticky top-[var(--app-shell-header-height)] bg-white mb-3">
          <Title order={2}>Ini header</Title>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quod eligendi libero temporibus explicabo corporis praesentium. Deserunt nemo adipisci facere sit aut. Nulla quod optio nam mollitia fugit iure officia.</p>
      </div>
      <div className="col-span-1">
        <div className='sticky top-[var(--app-shell-header-height)]'>
          <Card>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, optio nostrum beatae delectus, accusantium sed enim esse sint, error officiis similique earum. Rem voluptas et excepturi neque voluptatem dolorum nihil.</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductView