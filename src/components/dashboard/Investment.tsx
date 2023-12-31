'use client';
import React from 'react';

import CardBox from '@/components/ui/card';
import { Icons } from '@/components/ui/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/typography';
import { investmentData } from '@/data/investment';
import { cn } from '@/shared/cn';
import { CONDITION } from '@/shared/enum';
import { Flex } from '@radix-ui/themes';

interface Props {
  className?: string;
}

const Investment: React.FC<Props> = ({ className }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-4 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between">
        <Text size="5">Investment</Text>
        <Select>
          <SelectTrigger className="h-8 w-[80px] border-none">
            <SelectValue placeholder="today" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="today">today</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      {investmentData?.map((each, key) => (
        <Flex key={key} justify="between">
          <Flex justify="start" gap="3">
            <div className="light-bg-theme dark:bg-theme w-[35px] h-[35px] rounded-full flex justify-center items-center">
              {each.icon}
            </div>
            <Flex direction="column">
              <Text>{each.name}</Text>
              <Text size="1" className="text-dark-100">
                {each.company}
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Text size="1" className="flex justify-start items-center gap-x-[5px]">
              {each.condition === CONDITION.UP ? (
                <Icons.upRight className="w-[15px] h-[15px] text-blue-200" />
              ) : (
                <Icons.downRight className="w-[15px] h-[15px] text-red-500" />
              )}
              {each.percent}%
            </Text>
          </Flex>
          <Flex direction="column" align="end">
            <Text className="text-label-light dark:text-label-dark">{each.amount}</Text>
            <Text
              className={cn(
                'text-[14px]',
                each.condition === CONDITION.UP ? 'text-blue-200' : 'text-red-500'
              )}
            >
              {`$${each.condition === CONDITION.UP ? '+' : '-'}${each.profit}`}
            </Text>
          </Flex>
        </Flex>
      ))}
    </CardBox>
  );
};

export default Investment;
