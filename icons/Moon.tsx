import React from 'react'

interface IconProps {
  className?: string
}

export const IconMoon = ({ className = 'w-6' }: IconProps) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981" /></svg>
  )
}
