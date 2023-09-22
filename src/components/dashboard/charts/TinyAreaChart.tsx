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
import { ChartData } from '@/data';
import { CONDITION } from '@/shared/enum';

interface Props {
  data: ChartData;
  className?: string;
  chartClassName?: string;
}

const TinyAreaChart: React.FC<Props> = ({ className, chartClassName, data }: Props) => {
  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between" px="4" pt="4">
        <Text size="5">{data.name}</Text>
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
            <Text size="5">${data.incomeAmount}</Text>
            <div className="flex items-center gap-x-[5px] text-blue-200 pb-[20px]">
              <Text size="1" className="flex justify-start items-center gap-x-[5px]">
                {data.condition === CONDITION.UP ? (
                  <Icons.upRight className="w-[15px] h-[15px] text-blue-200" />
                ) : (
                  <Icons.downRight className="w-[15px] h-[15px] text-red-500" />
                )}
                {data.percent}%
              </Text>
            </div>
          </Flex>
        </Box>
        <div className={cn('w-full h-[115px]', chartClassName)}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data.chartData}
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
