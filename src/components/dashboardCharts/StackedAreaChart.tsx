'use client';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CardBox from '@/components/ui/card';
import { Box, Container, Flex, Grid } from '@radix-ui/themes';
import { Text } from '@/components/ui/typography';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Icons } from '../ui/image';
import { cn } from '@/shared/cn';

const data = [
  {
    name: 'Jan',
    uv: 0,
    pv: 200,
    amt: 300,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface Props {
  className?: string;
  chartClassName?: string;
}

const StackedAreaChart: React.FC<Props> = ({ className, chartClassName }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between" px="4" pt="4">
        <Text size="5">Revenue analysis</Text>
        <Select>
          <SelectTrigger className="h-8 w-auto border-none">
            <SelectValue placeholder="this month" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="this month">this month</SelectItem>
          </SelectContent>
        </Select>
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
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardBox>
  );
};

export default StackedAreaChart;
