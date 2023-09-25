'use client';
import React from 'react';

import CardBox from '@/components/ui/card';
import { Icons } from '@/components/ui/image';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Text } from '@/components/ui/typography';
import { goalsData } from '@/data/goals';
import { cn } from '@/shared/cn';
import { SELECT_ICONS } from '@/shared/enum';
import { Flex } from '@radix-ui/themes';

interface Props {
  className?: string;
}

const GoalsCard: React.FC<Props> = ({ className }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-4 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between">
        <Text size="5">Goals</Text>
        <Select>
          <SelectTrigger icon={SELECT_ICONS.PLUS} className="h-8 w-[100px] border-none">
            <SelectValue placeholder="add goal" />
          </SelectTrigger>
        </Select>
      </Flex>
      {goalsData?.map((each, key) => (
        <Flex key={key} justify="between">
          <Flex justify="start" gap="3">
            <div className="light-bg-theme dark:bg-theme w-[35px] h-[35px] rounded-full flex justify-center items-center">
              {each.icon}
            </div>
            <Flex direction="column">
              <Text>{each.name}</Text>
              {/* <Text className="text-dark-100">{maskNumber(each.accountNumber).masked}</Text> */}
            </Flex>
          </Flex>
          <Icons.caretRight />
        </Flex>
      ))}
    </CardBox>
  );
};

export default GoalsCard;
