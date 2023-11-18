import React from 'react'

interface IconProps {
  className?: string
}

export const IconAdd = ({ className = 'w-6' }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 12h14m-7-7v14" /></svg>
  )
}
