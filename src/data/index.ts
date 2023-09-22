import { CONDITION } from '@/shared/enum';

export interface ChartData {
  name: string;
  incomeAmount: number;
  percent: number;
  condition: CONDITION;
  chartData: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

export const incomeData: ChartData = {
  name: 'Income',
  incomeAmount: 6558,
  percent: 16,
  condition: CONDITION.UP,
  chartData: [
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
  ],
};

export const expensesData: ChartData = {
  name: 'Expenses',
  incomeAmount: 1420,
  percent: 36,
  condition: CONDITION.DOWN,
  chartData: [
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
  ],
};

export const investmentData: ChartData = {
  name: 'Investment',
  incomeAmount: 950,
  percent: 12,
  condition: CONDITION.UP,
  chartData: [
    {
      name: 'Page A',
      uv: 0,
      pv: 50,
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
      pv: 6000,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4000,
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
  ],
};
