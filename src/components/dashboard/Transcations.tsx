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

interface Props {
  className?: string;
}

const Transactions: React.FC<Props> = ({ className }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-4 space-y-[10px]',
        className
      )}
    >
      <Flex justify="start">
        <Text size="5">Transactions</Text>
        <Select>
          <SelectTrigger className="h-8 w-[130px] border-none">
            <SelectValue placeholder="this month" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="this month">this month</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      {transactionData?.map((each, key) => (
        <Flex key={key} justify="between">
          <Flex justify="start" gap="3">
            <div className="bg-theme w-[35px] h-[35px] rounded-full flex justify-center items-center">
              <Icons.leftRight className="text-white" />
            </div>
            <Flex direction="column">
              <Text>Alex T.</Text>
              <Text className="text-dark-100">Transfers</Text>
            </Flex>
          </Flex>
          <Flex direction="column" align="end">
            <Text className="text-label-light dark:text-label-dark">+$300</Text>
            <Text className="text-dark-100">Debit card</Text>
          </Flex>
        </Flex>
      ))}
    </CardBox>
  );
};

export default Transactions;
