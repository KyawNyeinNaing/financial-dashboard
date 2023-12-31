'use client';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import CardBox from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/typography';
import { Analysis } from '@/data/analysis';
import { cn } from '@/shared/cn';
import { Flex } from '@radix-ui/themes';

interface Props {
  data: Analysis[];
  className?: string;
  chartClassName?: string;
}

const StackedAreaChart: React.FC<Props> = ({ className, chartClassName, data }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between" px="4" pt="4">
        <Text size="5">Revenue analysis</Text>
        <Flex>
          <Select>
            <SelectTrigger className="h-8 w-auto border-none">
              <div className="w-2 h-2 rounded-full dark:bg-theme" />
              <SelectValue placeholder="2020" />
            </SelectTrigger>
            <SelectContent side="top">
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-8 w-auto border-none">
              <div className="w-2 h-2 rounded-full bg-pink-100" />
              <SelectValue placeholder="2021" />
            </SelectTrigger>
            <SelectContent side="top">
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </Flex>
      </Flex>
      <div className={cn('w-full h-[122px]', chartClassName)}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#755cca" fill="#755cca" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#9c50a5" fill="#9c50a5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardBox>
  );
};

export default StackedAreaChart;
