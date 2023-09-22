'use client';
import React from 'react';
import {
  BarChart as SimpleBarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
import { Icons } from '@/components/ui/image';
import { cn } from '@/shared/cn';
import { Financial } from '@/data/analysis/financial';

interface Props {
  data: Financial[];
  className?: string;
  chartClassName?: string;
}

const BarChart: React.FC<Props> = ({ className, chartClassName, data }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between" px="4" pt="4">
        <Text size="5">Financial analysis</Text>
        <Select>
          <SelectTrigger className="h-8 w-[130px] border-none">
            <SelectValue placeholder="this month" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="this month">this month</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      <Flex gap="3" px="4">
        <Flex align="center" gap="2">
          <div className="w-2 h-2 rounded-full bg-pink-100" />
          <Text>Expenses</Text>
        </Flex>
        <Flex align="center" gap="2">
          <div className="w-2 h-2 rounded-full bg-theme" />
          <Text>Income</Text>
        </Flex>
      </Flex>
      <div className={cn('w-full h-[122px]', chartClassName)}>
        <ResponsiveContainer width="100%" height="100%">
          <SimpleBarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </SimpleBarChart>
        </ResponsiveContainer>
      </div>
    </CardBox>
  );
};

export default BarChart;
