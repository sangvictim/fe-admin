import React from 'react'

interface IconProps {
  className?: string
}

export const IconColumn = ({ className = 'w-6' }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path d="M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" /></svg>
  )
}
