import { Icons } from '@/components/ui/image';

export interface Menu {
  key?: string;
  icon: JSX.Element;
  title: string;
  child?: {
    key: string;
    icon: JSX.Element;
    title: string;
  }[];
}

export const menuList: Menu[] = [
  {
    key: '/dashboard',
    icon: <Icons.dashboard />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/wallet',
    icon: <Icons.wallet />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/transactions',
    icon: <Icons.transactions />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/cashback',
    icon: <Icons.cashback />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/payments',
    icon: <Icons.payments />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/investment',
    icon: <Icons.investment />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/profile',
    icon: <Icons.user />,
    title: 'Dashboard',
    child: [],
  },
  {
    key: '/support',
    icon: <Icons.support />,
    title: 'Dashboard',
    child: [],
  },
  // {
  //   key: '/client',
  //   icon: <PersonIcon />,
  //   title: 'Clients',
  //   child: [
  //     {
  //       icon: <TableIcon />,
  //       title: 'Listing',
  //     },
  //     {
  //       icon: <EnterIcon />,
  //       title: 'Payment',
  //     },
  //     {
  //       icon: <ImageIcon />,
  //       title: 'Gallary',
  //     },
  //   ],
  // },
];
