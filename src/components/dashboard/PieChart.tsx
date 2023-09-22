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
  { name: 'Other', value: 93.04 },
  { name: 'Supermarkets', value: 186.65 },
  { name: 'Restaurants', value: 197.25 },
  { name: 'Transfers', value: 207.82 },
  { name: 'Cash', value: 340 },
  { name: 'Study', value: 500.85 },
];

const COLORS = ['#392c6b', '#5366fe', '#5cc7ff', '#ea60fe', '#9f4cfe', '#fe54b1'];

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
      <Flex justify="start" px="4" pt="4">
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
      <div className={cn('w-full h-[122px]', chartClassName)}>
        <ResponsiveContainer width="100%" height="100%">
          <PieReChart>
            <Pie
              data={data}
              // cx={120}
              // cy={200}
              innerRadius={60}
              outerRadius={80}
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
      </div>
    </CardBox>
  );
};

export default PieChart;
