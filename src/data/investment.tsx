import { Icons } from '@/components/ui/image';
import { CONDITION } from '@/shared/enum';

export interface Investment {
  name: string;
  amount: number;
  percent: number;
  profit: number;
  condition: CONDITION;
  company: string;
  icon: JSX.Element;
}

export const investmentData: Investment[] = [
  {
    name: 'AAPL',
    amount: 3204.05,
    percent: 2.89,
    profit: 92.59,
    condition: CONDITION.UP,
    company: 'Apple Inc',
    icon: <Icons.apple className="text-white" />,
  },
  {
    name: 'TSLA',
    amount: 8547.82,
    percent: 1.31,
    profit: 111.98,
    condition: CONDITION.DOWN,
    company: 'Tesla',
    icon: <Icons.tesla className="text-white" />,
  },
  {
    name: 'NFLX',
    amount: 1210,
    percent: 0.58,
    profit: 7.02,
    condition: CONDITION.DOWN,
    company: 'Netflix',
    icon: <Icons.netflix className="text-white" />,
  },
  {
    name: 'AMZN',
    amount: 14367.75,
    percent: 1.44,
    profit: 206.89,
    condition: CONDITION.UP,
    company: 'Amazon',
    icon: <Icons.amazon className="text-white" />,
  },
];
