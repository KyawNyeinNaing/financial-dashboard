'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/shared/cn';
import styled from 'styled-components';
import { Flex } from '@radix-ui/themes';

const SwitchStyled = styled(Flex)`
  .root {
    width: 30px;
    height: 15px;
    border-radius: 9999px;
    position: relative;
    box-shadow: 0 2px 10px var(--black-a7);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
      background-color: white;
      border-radius: 9999px;
      box-shadow: 0 2px 2px var(--black-a7);
      transition: transform 100ms;
      transform: translateX(2px);
      will-change: transform;
      &[data-state='checked'] {
        transform: translateX(19px);
      }
    }
  }

  .label {
    color: white;
    font-size: 15px;
    line-height: 1;
  }
`;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  {
    label?: string;
  } & React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, label, ...props }, ref) => (
  <SwitchStyled align="center" gap="4">
    <SwitchPrimitives.Root className="root bg-theme" id="airplane-mode" {...props}>
      <SwitchPrimitives.Thumb className="thumb" />
    </SwitchPrimitives.Root>
    <label className="label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
      {label}
    </label>
  </SwitchStyled>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
