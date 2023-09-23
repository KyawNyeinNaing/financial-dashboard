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
import { Icons } from '@/components/ui/image';
import { transactionData } from '@/data/transaction';
import { CONDITION, SELECT_ICONS } from '@/shared/enum';
import { quickTransferData } from '@/data/quickTransfer';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { fallbackString, maskNumber } from '@/lib/utils';

interface Props {
  className?: string;
}

const QuickTransfer: React.FC<Props> = ({ className }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-4 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between">
        <Text size="5">Quick Transfers</Text>
        <Select>
          <SelectTrigger icon={SELECT_ICONS.PLUS} className="h-8 w-[70px] border-none">
            <SelectValue placeholder="add" />
          </SelectTrigger>
        </Select>
      </Flex>
      {quickTransferData?.map((each, key) => (
        <Flex key={key} justify="between">
          <Flex justify="start" gap="3">
            <div className="light-bg-theme dark:bg-theme w-[35px] h-[35px] rounded-full flex justify-center items-center">
              <Avatar>
                <AvatarFallback>{fallbackString(each.name)}</AvatarFallback>
              </Avatar>
            </div>
            <Flex direction="column">
              <Text>{each.name}</Text>
              <Text className="text-dark-100">{maskNumber(each.accountNumber).masked}</Text>
            </Flex>
          </Flex>
          <Icons.caretRight />
        </Flex>
      ))}
    </CardBox>
  );
};

export default QuickTransfer;
