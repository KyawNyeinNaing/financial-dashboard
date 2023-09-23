'use client';
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/shared/cn';
import styled from 'styled-components';
import { Flex } from '@radix-ui/themes';
import useAtomReducer from '@/hooks/useAtomReducer';
import { TYPES } from '@/shared/enum';

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
    setTheme: (theme: string) => void;
  } & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, label, setTheme, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const { itemList } = useAtomReducer(TYPES.SWITCH_THEME);

  return (
    <SwitchStyled align="center" gap="4">
      <SwitchPrimitives.Root
        checked={isChecked}
        onCheckedChange={check => {
          setIsChecked(check);
          itemList(check);
          setTheme(check ? 'dark' : 'light');
        }}
        className="w-[30px] h-[15px] root bg-white dark:bg-theme"
        id="airplane-mode"
        {...props}
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
