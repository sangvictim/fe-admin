import React from 'react'

interface IconProps {
  className?: string
}

export const IconDotMenu = ({ className = 'w-6' }: IconProps) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g></svg>
  )
}
