'use client';
import * as React from 'react';
import styled from 'styled-components';

import useAtomReducer from '@/hooks/useAtomReducer';
import { cn } from '@/shared/cn';
import { THEME, TYPES } from '@/shared/enum';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { Flex } from '@radix-ui/themes';

const SwitchStyled = styled(Flex)`
  .root {
    width: 30px;
    height: 15px;
    border-radius: 9999px;
    position: relative;
    border: 1px solid;
    &:focus {
      box-shadow: 0 0 0 2px black;
    }
    &[data-state='checked'] {
      background-color: black;
    }
    & .thumb {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 9999px;
      transition: transform 100ms;
      transform: translateX(2px);
      will-change: transform;
      &[data-state='checked'] {
        transform: translateX(19px);
      }
    }
  }

  .label {
    font-size: 15px;
    line-height: 1;
  }
`;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  {
    label?: string;
    theme?: string;
    setTheme: (theme: string) => void;
  } & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, label, theme, setTheme, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(theme === THEME.LIGHT ? false : true);
  const { setItems } = useAtomReducer(TYPES.SWITCH_THEME);

  console.log('theme -> ', theme);
  console.log('isChecked -> ', isChecked);

  return (
    <SwitchStyled align="center" gap="4">
      <SwitchPrimitives.Root
        checked={isChecked}
        onCheckedChange={check => {
          setIsChecked(check);
          setItems(check);
          setTheme(check ? 'dark' : 'light');
        }}
        className={cn('w-[30px] h-[15px] root bg-white dark:bg-theme', className)}
        id="airplane-mode"
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb className="thumb bg-black dark:bg-white" />
      </SwitchPrimitives.Root>
      <label className="label" htmlFor="airplane-mode">
        {label}
      </label>
    </SwitchStyled>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
