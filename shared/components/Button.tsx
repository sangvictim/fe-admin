import { Button, ButtonFactory, ButtonProps, PolymorphicFactory, StylesApiProps, Text } from '@mantine/core'
import React, { DOMAttributes } from 'react'

interface ButtonProp extends ButtonProps, Partial<DOMAttributes<HTMLButtonElement>> {
  label?: string;
  icon?: React.ReactNode;
}

export const ButtonDefault: React.FC<ButtonProp> = ({ label, icon, ...props }) => {
  // Filter out event handler props and pass the rest to the Button component
  const { onClick, ...otherProps } = props;

  return (
    <Button variant='default' px={10} className='flex-shrink-0' onClick={onClick} {...otherProps}>
      <div className="flex md:gap-1">
        {icon}
        <Text className='hidden md:block'>{label}</Text>
      </div>
    </Button>
  );
};
