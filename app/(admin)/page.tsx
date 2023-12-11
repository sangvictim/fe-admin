"use client"

import { useRouter } from "next/navigation"

const HomePage = () => {
  const router = useRouter()
  return router.replace('/home')
}

export default HomePage