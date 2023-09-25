import { Icons } from '@/components/ui/image';

export interface Goals {
  name: string;
  totalAmount: number;
  expensedAmount: number;
  icon: JSX.Element;
}

export const goalsData: Goals[] = [
  {
    name: 'Trip',
    totalAmount: 20000,
    expensedAmount: 10576,
    icon: <Icons.plane className="text-white" />,
  },
  {
    name: 'House',
    totalAmount: 180000,
    expensedAmount: 54637,
    icon: <Icons.house className="text-white" />,
  },
  {
    name: 'Camera',
    totalAmount: 4650,
    expensedAmount: 983.75,
    icon: <Icons.camera className="text-white" />,
  },
];
