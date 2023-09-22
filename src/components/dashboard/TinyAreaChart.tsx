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
import { Icons } from '@/components/ui/image';
import { cn } from '@/shared/cn';

const data = [
  {
    name: 'Page A',
    uv: 0,
    pv: 200,
    amt: 300,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface Props {
  className?: string;
  chartClassName?: string;
}

const TinyAreaChart: React.FC<Props> = ({ className, chartClassName }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between" px="4" pt="4">
        <Text size="5">Income</Text>
        <Select>
          <SelectTrigger className="h-8 w-auto border-none">
            <SelectValue placeholder="this month" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="this month">this month</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      <Flex>
        <Box pl="4" className="w-[80px]">
          <Flex direction="column" justify="between" align="start" height="100%">
            <Text size="5">$6558.67</Text>
            <div className="flex items-center gap-x-[5px] text-blue-200 pb-[20px]">
              <Icons.upRight className="w-[15px] h-[15px]" />
              <Text>+16%</Text>
            </div>
          </Flex>
        </Box>
        <div className={cn('w-full h-[115px]', chartClassName)}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Flex>
    </CardBox>
  );
};

export default TinyAreaChart;
