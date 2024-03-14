import { Button, ButtonProps, Text, createPolymorphicComponent } from '@mantine/core';
import React, { DOMAttributes, FunctionComponent, forwardRef } from 'react';

interface CustomButtonProps extends ButtonProps, Partial<DOMAttributes<HTMLButtonElement>> {
  label?: string;
  icon?: React.ReactNode;
}

export const ButtonDefault = createPolymorphicComponent<'button', CustomButtonProps, FunctionComponent>(
  forwardRef<HTMLButtonElement, CustomButtonProps>(({ label, icon, ...others }, ref) => (
    <Button {...others} ref={ref} className='flex flex-shrink-0' px={10}>
      <div className="flex md:gap-1 items-center">
        {icon}
        <Text className='hidden md:block font-normal'>{label}</Text>
      </div>
    </Button>
  ))
);
