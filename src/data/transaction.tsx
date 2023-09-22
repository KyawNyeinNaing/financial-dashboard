import { Icons } from '@/components/ui/image';
import { CONDITION } from '@/shared/enum';

export interface Transaction {
  name: string;
  amount: number;
  condition: CONDITION;
  process: string;
  cardType: string;
  icon: JSX.Element;
}

export const transactionData: Transaction[] = [
  {
    name: 'Alex T',
    amount: 300,
    condition: CONDITION.UP,
    process: 'Transfers',
    cardType: 'Debit card',
    icon: <Icons.leftRight className="text-white" />,
  },
  {
    name: 'Uber',
    amount: 19.84,
    condition: CONDITION.DOWN,
    process: 'Taxi',
    cardType: 'Debit card',
    icon: <Icons.car className="text-white" />,
  },
  {
    name: 'Metro',
    amount: 85.29,
    condition: CONDITION.DOWN,
    process: 'Supermarkets',
    cardType: 'Debit card',
    icon: <Icons.bag className="text-white" />,
  },
  {
    name: 'Cashback',
    amount: 85.29,
    condition: CONDITION.UP,
    process: 'Rewards',
    cardType: 'Debit card',
    icon: <Icons.cashback className="text-white" />,
  },
];
