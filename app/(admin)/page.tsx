"use client"

import { useRouter } from "next/navigation"

const page = () => {
  const router = useRouter()
  return router.replace('/home')
}

export default page