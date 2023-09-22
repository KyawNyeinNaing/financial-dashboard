export interface Financial {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export const financialData: Financial[] = [
  {
    name: 'Feb',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mar',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Apr',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jun',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jul',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
