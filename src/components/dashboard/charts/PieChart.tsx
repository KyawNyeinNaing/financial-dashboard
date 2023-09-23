'use client';
import React, { useState } from 'react';
import { PieChart as PieReChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
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
import { cn } from '@/shared/cn';

const data = [
  { name: 'Supermarkets', value: 186.65 },
  { name: 'Transfers', value: 207.82 },
  { name: 'Restaurants', value: 197.25 },
  { name: 'Cash', value: 340 },
  { name: 'Study', value: 500.85 },
  { name: 'Other', value: 93.04 },
];

const COLORS = ['#5366fe', '#5cc7ff', '#9f4cfe', '#ea60fe', '#fe54b1', '#392c6b'];

interface Props {
  className?: string;
  chartClassName?: string;
}

const PieChart: React.FC<Props> = ({ className, chartClassName }: Props) => {
  // const [state, setState] = useState({
  //   activeIndex: 0,
  // });
  // const onPieEnter = (_, index) => {
  //   setState({
  //     activeIndex: index,
  //   });
  // };

  return (
    <CardBox
      className={cn(
        'h-[165px] bg-secondary-light dark:bg-secondary-dark p-0 space-y-[10px]',
        className
      )}
    >
      <Flex justify="between" px="4" pt="4">
        <Text size="5">Expenses</Text>
        <Select>
          <SelectTrigger className="h-8 w-[110px] border-none">
            <SelectValue placeholder="last week" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem value="last week">last week</SelectItem>
          </SelectContent>
        </Select>
      </Flex>
      <div className={cn('w-full h-[122px] flex gap-x-3', chartClassName)}>
        <ResponsiveContainer width="100%" height="100%">
          <PieReChart>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={50}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieReChart>
        </ResponsiveContainer>
        <div className="space-y-[5px] pr-4">
          <Flex justify="between" gap="2">
            <Flex align="center" gap="2">
              <div className="w-2 h-2 rounded-full bg-[#5366fe]" />
              <Text size="2">Supermarkets</Text>
            </Flex>
            <Text size="2">$186.65</Text>
          </Flex>
          <Flex justify="between" gap="2">
            <Flex align="center" gap="2">
              <div className="w-2 h-2 rounded-full bg-[#5cc7ff]" />
              <Text size="2">Transfers</Text>
            </Flex>
            <Text size="2">$207.82</Text>
          </Flex>
          <Flex justify="between" gap="2">
            <Flex align="center" gap="2">
              <div className="w-2 h-2 rounded-full bg-[#9f4cfe]" />
              <Text size="2">Restaurants</Text>
            </Flex>
            <Text size="2">$207.82</Text>
          </Flex>
          <Flex justify="between" gap="2">
            <Flex align="center" gap="2">
              <div className="w-2 h-2 rounded-full bg-[#ea60fe]" />
              <Text size="2">Cash</Text>
            </Flex>
            <Text size="2">$207.82</Text>
          </Flex>
          <Flex justify="between" gap="2">
            <Flex align="center" gap="2">
              <div className="w-2 h-2 rounded-full bg-[#fe54b1]" />
              <Text size="2">Study</Text>
            </Flex>
            <Text size="2">$207.82</Text>
          </Flex>
          <Flex justify="between" gap="2">
            <Flex align="center" gap="2">
              <div className="w-2 h-2 rounded-full bg-[#392c6b]" />
              <Text size="2">Other</Text>
            </Flex>
            <Text size="2">$207.82</Text>
          </Flex>
        </div>
      </div>
      <Flex px="4" py="6">
        <Text>You have spent 16% less money this week than last week</Text>
      </Flex>
    </CardBox>
  );
};

export default PieChart;
