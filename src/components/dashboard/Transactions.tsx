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
import { CONDITION } from '@/shared/enum';

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
      <Flex justify="between">
        <Text size="5">Transactions</Text>
        <Select>
          <SelectTrigger className="h-8 w-[80px] border-none">
            <SelectValue placeholder="today" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="today">today</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      {transactionData?.map((each, key) => (
        <Flex key={key} justify="between">
          <Flex justify="start" gap="3">
            <div className="light-bg-theme dark:bg-theme w-[35px] h-[35px] rounded-full flex justify-center items-center">
              {each.icon}
            </div>
            <Flex direction="column">
              <Text>{each.name}</Text>
              <Text className="text-dark-100">{each.process}</Text>
            </Flex>
          </Flex>
          <Flex direction="column" align="end">
            <Text
              className={cn(
                'text-[14px]',
                each.condition === CONDITION.UP ? 'text-blue-200' : 'text-red-500'
              )}
            >
              {`$${each.condition === CONDITION.UP ? '+' : '-'}${each.amount}`}
            </Text>
            <Text className="text-dark-100">{each.cardType}</Text>
          </Flex>
        </Flex>
      ))}
    </CardBox>
  );
};

export default Transactions;
