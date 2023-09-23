'use client';
import CardBox from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/typography';
import { cn } from '@/shared/cn';
import { Flex } from '@radix-ui/themes';
import React from 'react';
import { Icons, Image } from '@/components/ui/image';
import { transactionData } from '@/data/transaction';
import { CONDITION, SELECT_ICONS } from '@/shared/enum';
import styled, { css } from 'styled-components';

interface Props {
  className?: string;
}

const PaymentCard: React.FC<Props> = ({ className }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[280px] bg-secondary-light dark:bg-secondary-dark p-4 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between">
        <Text size="5">My cards</Text>
        <Select>
          <SelectTrigger icon={SELECT_ICONS.PLUS} className="h-8 w-[70px] border-none">
            <SelectValue placeholder="add" />
          </SelectTrigger>
        </Select>
      </Flex>
      <div className="relative">
        <CardStyled src="/credit-card.png" width={260} height={260} />
      </div>
    </CardBox>
  );
};

export default PaymentCard;

const CardStyled = styled.div<{ src: string; width?: number; height?: number }>`
  ${({ src, width, height }) =>
    css`
      background: url('${src}') no-repeat center / contain;
      width: ${width}px;
      height: ${height}px;
      margin-top: -20px;
    `}
`;
