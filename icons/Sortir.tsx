import React from 'react'

interface IconProps {
  className?: string
}

export const IconSortir = ({ className = 'w-6' }: IconProps) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 48 48"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="4" d="m24 42l-9-13h18l-9 13Zm0-36l-9 13h18L24 6Z" /></svg>
  )
}
