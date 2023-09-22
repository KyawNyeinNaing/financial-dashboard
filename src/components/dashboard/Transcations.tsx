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

interface Props {
  className?: string;
}

const Transactions: React.FC<Props> = ({ className }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="start" px="4" pt="4">
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
    </CardBox>
  );
};

export default Transactions;
